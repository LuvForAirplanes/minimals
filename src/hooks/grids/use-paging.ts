import { useQuery } from '@apollo/client';
import React, { useRef, useMemo, useState, useEffect } from 'react';

import {
  GridRowId,
  GridFeatureMode,
  GridPaginationModel,
  GridCallbackDetails,
} from '@mui/x-data-grid';

import { getUsersQuery } from 'src/graphql/queries/users';
import { UsersQuery, ApplicationUser, UsersQueryVariables } from 'src/graphql/types/graphql';

import { Sorting } from './use-sorting';
import { Filtering } from './use-filtering';

interface PagingProps {
  sort: Sorting<unknown>;
  filter: Filtering<unknown>;
}

interface Paging {
  gridArgs: {
    paginationModel?: GridPaginationModel;
    onPaginationModelChange: (
      model: GridPaginationModel,
      details: GridCallbackDetails<any>
    ) => void;
    rowCount: number;
    rows: readonly any[];
    isLoading: boolean;
    loading: boolean;
    paginationMode?: GridFeatureMode | undefined;
  };
  refetch: any;
  loading: boolean;
}

export function usePaging({ filter, sort }: PagingProps): Paging {
  const PAGE_SIZE = 10;

  const mapPageToNextCursor = useRef<{ [page: number]: GridRowId }>({});

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: PAGE_SIZE,
  });

  const queryOptions = useMemo(
    () =>
      ({
        after: mapPageToNextCursor.current[paginationModel.page - 1],
        first: paginationModel.pageSize,
        order: sort.order,
        where: filter.where,
      }) as UsersQueryVariables,
    [paginationModel, sort, filter]
  );

  const {
    loading: isLoading,
    data,
    refetch: refetchData,
  } = useQuery<UsersQuery, UsersQueryVariables>(getUsersQuery, {
    variables: queryOptions,
  });

  const handlePaginationModelChange = (newPaginationModel: GridPaginationModel) => {
    // We have the cursor, we can allow the page transition.
    if (newPaginationModel.page === 0 || mapPageToNextCursor.current[newPaginationModel.page - 1]) {
      setPaginationModel(newPaginationModel);
    }
  };

  useEffect(() => {
    if (!isLoading && data?.data?.pageInfo.hasNextPage) {
      // We add nextCursor when available
      mapPageToNextCursor.current[paginationModel.page] = data?.data?.pageInfo?.endCursor ?? '';
    }
  }, [
    paginationModel.page,
    isLoading,
    data?.data?.pageInfo?.endCursor,
    data?.data?.pageInfo?.hasNextPage,
  ]);

  // Some API clients return undefined while loading
  // Following lines are here to prevent `rowCountState` from being undefined during the loading
  const [rowCount, setRowCountState] = React.useState(data?.data?.count || 0);
  React.useEffect(() => {
    setRowCountState((prevRowCountState) =>
      data?.data?.count !== undefined ? data?.data?.count : prevRowCountState
    );
  }, [data?.data?.count, setRowCountState]);

  return {
    gridArgs: {
      rowCount,
      onPaginationModelChange: handlePaginationModelChange,
      paginationModel,
      rows: (data?.data?.nodes as ApplicationUser[]) ?? ([] as ApplicationUser[]),
      isLoading,
      loading: isLoading,
      paginationMode: 'server',
    },
    refetch: () => {
      refetchData();
    },
    loading: isLoading,
  };
}
