import { useQuery, DocumentNode } from '@apollo/client';
import React, { useRef, useState, useEffect } from 'react';

import {
  GridRowId,
  GridFeatureMode,
  GridPaginationModel,
  GridCallbackDetails,
} from '@mui/x-data-grid';

import { QueryContext } from 'src/graphql/config';
import { Connection } from 'src/graphql/types/queryTypes';
import { ApplicationUser } from 'src/graphql/types/graphql';

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

interface ConnectionDataInterface<T> {
  // CountData is a child data
  readonly data?:
    | (Connection<T> & {
        readonly count: number;
      })
    | null;
}
interface RawDataInterface<T> {
  readonly data?: any;
  /** Only a temp property to use the unused T to prevent copiler warnings. data should be using T, but isn't due to type issues. */
  readonly showData?: T;
}
type DataInterface<T> = ConnectionDataInterface<T> | RawDataInterface<T>;

export function usePaging<
  TData extends DataInterface<TDataNode>,
  TDataNode,
  TQueryVariables extends {
    order?: any | null;
    where?: any | null;
    first?: number | null;
    after?: string | null;
  },
>(
  query: DocumentNode,
  order: TQueryVariables['order'],
  where: TQueryVariables['where'],
  queryVariables: TQueryVariables | null = null
): Paging {
  const PAGE_SIZE = 10;

  const mapPageToNextCursor = useRef<{ [page: number]: GridRowId }>({});

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: PAGE_SIZE,
  });

  // const queryOptions = useMemo(
  //   () =>
  //     ({
  //       after: mapPageToNextCursor.current[paginationModel.page - 1],
  //       first: paginationModel.pageSize,
  //       order,
  //       where,
  //     }) as TQueryVariables,
  //   [paginationModel, order, where]
  // );

  const {
    loading: isLoading,
    data,
    refetch: refetchData,
  } = useQuery<TData, TQueryVariables>(query, {
    context: { hideErrors: true } as QueryContext,
    variables: {
      order,
      where,
      ...queryVariables,
    } as TQueryVariables,
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
    setRowCountState((prevRowCountState: number) =>
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
