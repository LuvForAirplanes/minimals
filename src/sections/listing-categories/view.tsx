import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';

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

import { listingCategoriesQuery } from 'src/graphql/queries/listingCategories';
import { rawListingCategoriesQuery } from 'src/graphql/queries/rawListingCategories';
import { addListingCategoryMutation } from 'src/graphql/mutations/addListingCategory';
import { updateListingCategoryMutation } from 'src/graphql/mutations/updateListingCategory';
import { deleteListingCategoryMutation } from 'src/graphql/mutations/deleteListingCategory';
import {
  ListingCategory,
  ListingCategoriesQuery,
  ListingCategorySortInput,
  RawListingCategoriesQuery,
  ListingCategoryFilterInput,
  AddListingCategoryMutation,
  ListingCategoryEditFragment,
  DeleteListingCategoryMutation,
  UpdateListingCategoryMutation,
  ListingCategoriesQueryVariables,
  RawListingCategoriesQueryVariables,
  AddListingCategoryMutationVariables,
  DeleteListingCategoryMutationVariables,
  UpdateListingCategoryMutationVariables,
} from 'src/graphql/types/graphql';

import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';
import { ConfirmDialog } from 'src/components/custom-dialog';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import { SelectCell } from './category-select';

export default function ListingCategoriesView() {
  const settings = useSettingsContext();
  const { enqueueSnackbar } = useSnackbar();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [adding, setAdding] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [id, setId] = useState<string | null>(null);

  const { data: categories } = useQuery<
    RawListingCategoriesQuery,
    RawListingCategoriesQueryVariables
  >(rawListingCategoriesQuery);

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      editable: true,
      width: 850,
    },
    {
      field: 'parentId',
      headerName: 'Parent',
      editable: true,
      width: 100,
      renderEditCell: (d) => SelectCell(d, categories?.rawListingCategories as ListingCategory[]),
    },
    {
      field: 'listable',
      headerName: 'Listable',
      editable: true,
      width: 100,
      type: 'boolean',
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

  const [update] = useMutation<
    UpdateListingCategoryMutation,
    UpdateListingCategoryMutationVariables
  >(updateListingCategoryMutation, {
    refetchQueries: [listingCategoriesQuery],
    onCompleted: () => enqueueSnackbar('Listing category updated!', { variant: 'success' }),
  });
  const [add, { loading: addLoading }] = useMutation<
    AddListingCategoryMutation,
    AddListingCategoryMutationVariables
  >(addListingCategoryMutation, {
    refetchQueries: [listingCategoriesQuery],
    variables: {
      category: {
        id: id ?? '',
        name,
        listable: true,
        parentId: null,
      },
    },
    onCompleted: () => {
      setName('');
      setId(null);
      setAdding(false);
    },
  });

  const [deleteListingCategory, { loading: deleting }] = useMutation<
    DeleteListingCategoryMutation,
    DeleteListingCategoryMutationVariables
  >(deleteListingCategoryMutation, {
    variables: {
      id: deletingId ?? '',
    },
    refetchQueries: [listingCategoriesQuery],
    onCompleted: () => {
      enqueueSnackbar('Successfully deleted listing category!', { variant: 'success' });
      setDeletingId(null);
    },
  });

  const sort = useSorting<ListingCategorySortInput>([{ field: 'name', sort: 'asc' }]);
  const filter = useFiltering<ListingCategoryFilterInput>();
  const paging = usePaging<
    ListingCategoriesQuery,
    ListingCategoryEditFragment,
    ListingCategoriesQueryVariables
  >(listingCategoriesQuery, sort.order, filter.where, {});

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Listing Categories"
        links={[{ name: 'Dashboard', href: paths.dashboard.root }, { name: 'Listing Categories' }]}
        action={
          <Button
            variant="contained"
            startIcon={<Iconify icon="mingcute:add-line" />}
            onClick={() => setAdding(true)}
          >
            New Listing Category
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
                  category: updatedRow,
                },
              })
            }
            onProcessRowUpdateError={(e) => {
              console.log(e);
            }}
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
            onClick={() => deleteListingCategory()}
            loading={deleting}
          >
            Delete
          </LoadingButton>
        }
      />

      <Dialog open={adding} onClose={() => setAdding(false)}>
        <DialogTitle>Add Listing Category</DialogTitle>
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
            Add Category
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
