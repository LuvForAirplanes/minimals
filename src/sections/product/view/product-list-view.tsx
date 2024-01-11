import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import Box from '@mui/material/Box';
import { LoadingButton } from '@mui/lab';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import {
  Tab,
  Tabs,
  Card,
  Link,
  Stack,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  TableCell,
  IconButton,
  ListItemText,
  LinearProgress,
} from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridToolbarExport,
  GridRowHeightParams,
  GridToolbarContainer,
  GridRowSelectionModel,
  GridToolbarFilterButton,
  GridToolbarColumnsButton,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';
import { usePaging } from 'src/hooks/grids/use-paging';
import { useSorting } from 'src/hooks/grids/use-sorting';
import { useFiltering } from 'src/hooks/grids/use-filtering';

import { fCurrency } from 'src/utils/format-number';
import { fDate, fTime } from 'src/utils/format-time';

import { getListingsQuery } from 'src/graphql/queries/listings';
import { deleteListingMutation } from 'src/graphql/mutations/deleteListings';
import { updateListingListMutation } from 'src/graphql/mutations/listingList';
import { listingStatisticsQuery } from 'src/graphql/queries/listingStatistics';
import {
  ListingsQuery,
  ListingFragment,
  ListingSortInput,
  ListingFilterInput,
  ListingListMutation,
  DeleteListingMutation,
  ListingsQueryVariables,
  ListingStatisticsQuery,
  ListingListMutationVariables,
  DeleteListingMutationVariables,
  ListingStatisticsQueryVariables,
} from 'src/graphql/types/graphql';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';
import { ConfirmDialog } from 'src/components/custom-dialog';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

import ListingQuickEditForm from './listing-quick-edit-form';

export default function ProductListView() {
  const settings = useSettingsContext();
  const { enqueueSnackbar } = useSnackbar();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [openedMenuId, setOpenedMenuId] = useState<string | null>(null);
  const confirmDelete = useBoolean();
  const quickEdit = useBoolean();
  const popover = usePopover();
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    {
      field: 'title',
      headerName: 'Title',
      editable: false,
      width: 310,
      renderCell: (d) => (
        <Stack direction="row" alignItems="center" sx={{ py: 2, width: 1 }}>
          <Avatar
            alt={d.row.title}
            src={`/api/listings/images/${d.row.mainImageId}`}
            variant="rounded"
            sx={{ width: 64, height: 64, mr: 2 }}
          />

          <ListItemText
            disableTypography
            primary={
              <Link
                noWrap
                color="inherit"
                component={RouterLink}
                variant="subtitle2"
                href={paths.dashboard.product.details(d.row.id)}
                sx={{ cursor: 'pointer' }}
              >
                {d.row.title}
              </Link>
            }
            secondary={
              <Box component="div" sx={{ typography: 'body2', color: 'text.disabled' }}>
                {d.row.category?.name}
              </Box>
            }
            sx={{ display: 'flex', flexDirection: 'column' }}
          />
        </Stack>
      ),
    },
    {
      field: 'added',
      headerName: 'Created at',
      editable: true,
      width: 160,
      renderCell: (d) => (
        <ListItemText
          primary={fDate(d.row.added)}
          secondary={fTime(d.row.added)}
          primaryTypographyProps={{ typography: 'body2', noWrap: true }}
          secondaryTypographyProps={{
            mt: 0.5,
            component: 'span',
            typography: 'caption',
          }}
        />
      ),
    },
    {
      field: 'updated',
      headerName: 'Updated at',
      editable: true,
      width: 160,
      renderCell: (d) => (
        <ListItemText
          primary={fDate(d.row.updated)}
          secondary={fTime(d.row.updated)}
          primaryTypographyProps={{ typography: 'body2', noWrap: true }}
          secondaryTypographyProps={{
            mt: 0.5,
            component: 'span',
            typography: 'caption',
          }}
        />
      ),
    },
    {
      field: 'quantity',
      headerName: 'Stock',
      editable: true,
      width: 130,
      renderCell: (d) => (
        <Stack sx={{ typography: 'caption', color: 'text.secondary' }}>
          <LinearProgress
            value={75}
            variant="determinate"
            sx={{ mb: 1, height: 6, maxWidth: 80 }}
          />
          {d.row.quantity} Available
        </Stack>
      ),
    },
    {
      field: 'price',
      headerName: 'Price',
      editable: true,
      width: 130,
      renderCell: (d) => <>{fCurrency(d.row.price)}</>,
    },
    {
      field: 'isPublished',
      headerName: 'Status',
      editable: true,
      renderCell: (d) => (
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
          <Label variant="soft" color={d.row.isPublished ? 'info' : 'default'}>
            {d.row.isPublished ? 'Published' : 'Draft'}
          </Label>
        </Box>
      ),
      width: 100,
    },
    {
      sortable: false,
      filterable: false,
      field: '',
      renderCell: (d) => (
        <TableCell align="right" sx={{ px: 1, whiteSpace: 'nowrap' }}>
          <Tooltip title="Edit" placement="top" arrow>
            <IconButton
              color={quickEdit.value ? 'inherit' : 'default'}
              onClick={() => navigate(`/dashboard/product/${d.row.id}/edit`)}
            >
              <Iconify icon="solar:pen-bold" />
            </IconButton>
          </Tooltip>

          <IconButton
            color={popover.open ? 'inherit' : 'default'}
            onClick={(e) => {
              popover.onOpen(e);
              setOpenedMenuId(d.row.id);
            }}
          >
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      ),
      width: 100,
    },
  ];

  const [rowSelectionModel, setRowSelectionModel] = React.useState<GridRowSelectionModel>([]);

  const [update] = useMutation<ListingListMutation, ListingListMutationVariables>(
    updateListingListMutation,
    {
      refetchQueries: [getListingsQuery],
    }
  );

  const [deleteListing, { loading: deleting }] = useMutation<
    DeleteListingMutation,
    DeleteListingMutationVariables
  >(deleteListingMutation, {
    variables: {
      ids: rowSelectionModel.map((m) => m as string),
      id: openedMenuId,
    },
    refetchQueries: [getListingsQuery],
    onCompleted: () => enqueueSnackbar('Successfully deleted listings!', { variant: 'success' }),
  });

  const sort = useSorting<ListingSortInput>([{ field: 'added', sort: 'asc' }]);
  const filter = useFiltering<ListingFilterInput>();
  const paging = usePaging<ListingsQuery, ListingFragment, ListingsQueryVariables>(
    getListingsQuery,
    sort.order,
    filter.where,
    {}
  );
  const { data } = useQuery<ListingStatisticsQuery, ListingStatisticsQueryVariables>(
    listingStatisticsQuery
  );

  const [currentFilter, setCurrentFilter] = useState<string>('All');
  const tabs = ['All', 'Published', 'Draft'];

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Listings"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Listing', href: paths.dashboard.product.root },
          { name: 'List' },
        ]}
        action={
          <Box>
            <Button
              component={RouterLink}
              href={paths.dashboard.product.new}
              variant="contained"
              startIcon={<Iconify icon="mingcute:add-line" />}
            >
              New Listing
            </Button>
          </Box>
        }
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <Card>
        <Tabs
          value={currentFilter}
          onChange={(d, s) => {
            setCurrentFilter(s);
            if (s === 'Published') {
              filter.setFilter({
                items: [{ field: 'isPublished', operator: 'equals', value: true }],
              });
            } else if (s === 'All') {
              filter.setFilter();
            } else if (s === 'Draft') {
              filter.setFilter({
                items: [{ field: 'isPublished', operator: 'equals', value: false }],
              });
            }
          }}
          sx={{
            px: 2.5,
            boxShadow: (theme) => `inset 0 -2px 0 0 ${alpha(theme.palette.grey[500], 0.08)}`,
          }}
        >
          {tabs.map((tab) => (
            <Tab
              key={tab}
              iconPosition="end"
              value={tab}
              label={tab}
              icon={
                <Label
                  variant={tab === 'all' ? 'filled' : 'soft'}
                  color={
                    (tab === 'Published' && 'success') ||
                    (tab === 'Draft' && 'warning') ||
                    'default'
                  }
                >
                  {tab === 'Published' && (data?.listingStatistics.published ?? 0)}
                  {tab === 'Draft' && (data?.listingStatistics.draft ?? 0)}
                  {tab === 'All' && (data?.listingStatistics.all ?? 0)}
                </Label>
              }
            />
          ))}
        </Tabs>

        <Box sx={{ height: 650, width: '100%' }}>
          <DataGrid
            {...paging.gridArgs}
            {...sort.gridArgs}
            {...filter.gridArgs}
            onRowSelectionModelChange={(newRowSelectionModel) =>
              setRowSelectionModel(newRowSelectionModel)
            }
            rowSelectionModel={rowSelectionModel}
            columns={columns}
            checkboxSelection
            ignoreDiacritics
            editMode="cell"
            getRowHeight={({ id, densityFactor }: GridRowHeightParams) => 96 * densityFactor}
            disableRowSelectionOnClick
            processRowUpdate={(updatedRow) =>
              update({
                variables: {
                  listing: updatedRow,
                },
              })
            }
            onProcessRowUpdateError={() =>
              enqueueSnackbar('Listing saved successfully.', { variant: 'success' })
            }
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            slots={{
              toolbar: () =>
                CustomToolbar(
                  rowSelectionModel,
                  () => confirmDelete.onTrue(),
                  deleting,
                  paging.refetch,
                  paging.loading
                ),
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
      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 140 }}
      >
        <MenuItem
          onClick={() => {
            confirmDelete.onTrue();
            popover.onClose();
          }}
          sx={{ color: 'error.main' }}
        >
          <Iconify icon="solar:trash-bin-trash-bold" />
          Delete
        </MenuItem>

        <MenuItem
          onClick={() => {
            setEditingId(openedMenuId);
            popover.onClose();
          }}
        >
          <Iconify icon="solar:pen-bold" />
          Quick Edit
        </MenuItem>
      </CustomPopover>

      <ConfirmDialog
        open={confirmDelete.value}
        onClose={() => {
          confirmDelete.onFalse();
        }}
        title="Delete"
        content="Are you sure want to delete?"
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              deleteListing();
              confirmDelete.onFalse();
            }}
          >
            Delete
          </Button>
        }
      />
      {editingId ? (
        <ListingQuickEditForm id={editingId ?? ''} open onClose={() => setEditingId(null)} />
      ) : null}
    </Container>
  );
}

function CustomToolbar(
  { length }: GridRowSelectionModel,
  del: any,
  deleting: boolean,
  reload: any,
  reloading: boolean
) {
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
      {length > 0 && (
        <LoadingButton
          sx={{ padding: '3px 5px' }}
          color="error"
          startIcon={<Iconify icon="mdi:delete-outline" />}
          onClick={del}
          loading={deleting}
        >
          Delete
        </LoadingButton>
      )}
    </GridToolbarContainer>
  );
}
