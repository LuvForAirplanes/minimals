import React from 'react';

import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';

import { useSettingsContext } from 'src/components/settings';

import { usePaging } from './usePaging';
import { useSorting } from './useSorting';
import { useFiltering } from './useFiltering';

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

  const sort = useSorting([{ field: 'id', sort: 'desc' }]);
  const filter = useFiltering();
  const paging = usePaging({ filter, sort });

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> Blank </Typography>

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
            {...paging.gridArgs}
            {...sort.gridArgs}
            {...filter.gridArgs}
            columns={columns}
            checkboxSelection
            ignoreDiacritics
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
            pageSizeOptions={[5, 10]}
          />
        </Box>
      </Box>
    </Container>
  );
}
