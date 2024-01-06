import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {
  DataGrid,
  GridRowId,
  GridColDef,
  GridToolbar,
  GridPaginationModel,
} from '@mui/x-data-grid';

import { getUsersQuery } from 'src/graphql/queries/users';
import { UsersQuery, ApplicationUser, UsersQueryVariables } from 'src/graphql/types/graphql';

import { useSettingsContext } from 'src/components/settings';

import { useSorting } from './useSorting';
import { useFiltering } from './useFiltering';

// ----------------------------------------------------------------------

export default function BlankView() {
  const settings = useSettingsContext();
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 200 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 200,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 200,
      editable: true,
    },
  ];

  // const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon' },
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime' },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya' },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys' },
  //   { id: 6, lastName: 'Melisandre', firstName: null },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara' },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini' },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey' },
  // ];
  const sort = useSorting([{ field: 'id', sort: 'desc' }]);
  const filter = useFiltering();

  const PAGE_SIZE = 5;

  const mapPageToNextCursor = React.useRef<{ [page: number]: GridRowId }>({});

  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: PAGE_SIZE,
  });

  const queryOptions = React.useMemo(
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

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4">Blank</Typography>

      <Box
        sx={{
          mt: 5,
          width: 1,
          borderRadius: 2,
          padding: 2,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      >
        <Box sx={{ height: 500, width: '100%' }}>
          <DataGrid
            {...data}
            rowCount={rowCountState}
            paginationMode="server"
            onPaginationModelChange={handlePaginationModelChange}
            paginationModel={paginationModel}
            loading={isLoading}
            rows={(data?.data?.nodes as ApplicationUser[]) ?? ([] as ApplicationUser[])}
            columns={columns}
            {...sort.gridArgs}
            {...filter.gridArgs}
            checkboxSelection
            ignoreDiacritics
            sortingMode="server"
            filterMode="server"
            disableRowSelectionOnClick
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
            pageSizeOptions={[5]}
          />
        </Box>
      </Box>
    </Container>
  );
}
