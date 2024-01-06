import { useQuery } from '@apollo/client';
import React, { useRef, useMemo, useState, useEffect } from 'react';

import { GridRowId, GridPaginationModel } from '@mui/x-data-grid';

import { getUsersQuery } from 'src/graphql/queries/users';
import { UsersQuery, UsersQueryVariables } from 'src/graphql/types/graphql';

interface Filtering<T> {
  gridArgs: {
    filterModel?: GridFilterModel;
    onFilterModelChange: (model: GridFilterModel, details: GridCallbackDetails<'filter'>) => void;
  };
  where?: T;
  setFilter: any;
}

export function usePaging() {
  const PAGE_SIZE = 5;

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
  console.log(queryOptions);
  const { loading: isLoading, data } = useQuery<UsersQuery, UsersQueryVariables>(getUsersQuery, {
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
  const [rowCountState, setRowCountState] = React.useState(data?.data?.count || 0);
  React.useEffect(() => {
    setRowCountState((prevRowCountState) =>
      data?.data?.count !== undefined ? data?.data?.count : prevRowCountState
    );
  }, [data?.data?.count, setRowCountState]);
}
