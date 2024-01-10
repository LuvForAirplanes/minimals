import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import Box from '@mui/material/Box';
import { LoadingButton } from '@mui/lab';
import Container from '@mui/material/Container';
import {
  Card,
  Button,
  Dialog,
  Tooltip,
  TextField,
  TableCell,
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
  LinearProgress,
  DialogContentText,
} from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridToolbarExport,
  GridToolbarContainer,
  GridRowSelectionModel,
  GridToolbarFilterButton,
  GridToolbarColumnsButton,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';

import { paths } from 'src/routes/paths';

import { usePaging } from 'src/hooks/grids/use-paging';
import { useSorting } from 'src/hooks/grids/use-sorting';
import { useFiltering } from 'src/hooks/grids/use-filtering';

import { listingTypesQuery } from 'src/graphql/queries/listingTypes';
import { addListingTypeMutation } from 'src/graphql/mutations/addListingType';
import { updateListingTypeMutation } from 'src/graphql/mutations/updateListingType';
import { deleteListingTypeMutation } from 'src/graphql/mutations/deleteListingType';
import {
  ListingTypesQuery,
  ListingTypeFragment,
  ListingTypeSortInput,
  ListingTypeFilterInput,
  AddListingTypeMutation,
  DeleteListingTypeMutation,
  UpdateListingTypeMutation,
  ListingTypesQueryVariables,
  AddListingTypeMutationVariables,
  DeleteListingTypeMutationVariables,
  UpdateListingTypeMutationVariables,
} from 'src/graphql/types/graphql';

import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';
import { ConfirmDialog } from 'src/components/custom-dialog';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

export default function ListingTypesView() {
  const settings = useSettingsContext();
  const { enqueueSnackbar } = useSnackbar();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [adding, setAdding] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [id, setId] = useState<string | null>(null);

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      editable: true,
      width: 1050,
    },

    {
      sortable: false,
      filterable: false,
      field: '',
      renderCell: (d) => (
        <TableCell align="right" sx={{ px: 1, whiteSpace: 'nowrap' }}>
          <Tooltip title="Delete" placement="top" arrow>
            <IconButton
              color="error"
              onClick={() => {
                setDeletingId(d.row.id);
              }}
            >
              <Iconify icon="solar:trash-bin-trash-bold" />
            </IconButton>
          </Tooltip>
        </TableCell>
      ),
      width: 100,
    },
  ];

  const [rowSelectionModel, setRowSelectionModel] = React.useState<GridRowSelectionModel>([]);

  const [update] = useMutation<UpdateListingTypeMutation, UpdateListingTypeMutationVariables>(
    updateListingTypeMutation,
    {
      refetchQueries: [listingTypesQuery],
    }
  );
  const [add, { loading: addLoading }] = useMutation<
    AddListingTypeMutation,
    AddListingTypeMutationVariables
  >(addListingTypeMutation, {
    refetchQueries: [listingTypesQuery],
    variables: {
      type: {
        id: id ?? '',
        name,
      },
    },
    onCompleted: () => setAdding(false),
  });

  const [deleteListingType, { loading: deleting }] = useMutation<
    DeleteListingTypeMutation,
    DeleteListingTypeMutationVariables
  >(deleteListingTypeMutation, {
    variables: {
      id: deletingId ?? '',
    },
    refetchQueries: [listingTypesQuery],
    onCompleted: () => {
      enqueueSnackbar('Successfully deleted listing type!', { variant: 'success' });
      setDeletingId(null);
    },
  });

  const sort = useSorting<ListingTypeSortInput>([{ field: 'name', sort: 'asc' }]);
  const filter = useFiltering<ListingTypeFilterInput>();
  const paging = usePaging<ListingTypesQuery, ListingTypeFragment, ListingTypesQueryVariables>(
    listingTypesQuery,
    sort.order,
    filter.where,
    {}
  );

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Listing Types"
        links={[{ name: 'Dashboard', href: paths.dashboard.root }, { name: 'Listing Types' }]}
        action={
          <Button
            variant="contained"
            startIcon={<Iconify icon="mingcute:add-line" />}
            onClick={() => setAdding(true)}
          >
            New Listing Type
          </Button>
        }
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <Card>
        <Box sx={{ height: 550, width: '100%' }}>
          <DataGrid
            {...paging.gridArgs}
            {...sort.gridArgs}
            {...filter.gridArgs}
            onRowSelectionModelChange={(newRowSelectionModel) =>
              setRowSelectionModel(newRowSelectionModel)
            }
            rowSelectionModel={rowSelectionModel}
            columns={columns}
            checkboxSelection={false}
            ignoreDiacritics
            editMode="cell"
            disableRowSelectionOnClick
            processRowUpdate={(updatedRow) =>
              update({
                variables: {
                  type: updatedRow,
                },
              })
            }
            onProcessRowUpdateError={() =>
              enqueueSnackbar('Listing type saved successfully.', { variant: 'success' })
            }
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            slots={{
              toolbar: () => CustomToolbar(paging.refetch, paging.loading),
              loadingOverlay: LinearProgress,
            }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: {
                  style: {
                    pointerEvents: 'none',
                    opacity: 0.4,
                  },
                  placeholder: 'Search... (disabled)',
                },
              },
            }}
            pageSizeOptions={[10, 25, 100]}
          />
        </Box>
      </Card>

      <ConfirmDialog
        open={deletingId !== null}
        onClose={() => {
          setDeletingId(null);
        }}
        title="Delete"
        content="Are you sure want to delete?"
        action={
          <LoadingButton
            variant="contained"
            color="error"
            onClick={() => deleteListingType()}
            loading={deleting}
          >
            Delete
          </LoadingButton>
        }
      />

      <Dialog open={adding} onClose={() => setAdding(false)}>
        <DialogTitle>Add Listing Type</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter the name of the new listing type:</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={(e) => {
              if (id === null) {
                setId(e.target.value.toLowerCase().replaceAll(' ', '_'));
              }
            }}
          />
          <TextField
            margin="dense"
            label="Id"
            fullWidth
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAdding(false)}>Cancel</Button>
          <LoadingButton loading={addLoading} onClick={() => add()} disabled={addLoading}>
            Add Type
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

function CustomToolbar(reload: any, reloading: boolean) {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
      <LoadingButton
        sx={{ padding: '3px 5px' }}
        startIcon={<Iconify icon="mdi:reload" />}
        onClick={reload}
        loading={reloading}
      >
        Reload
      </LoadingButton>
    </GridToolbarContainer>
  );
}
