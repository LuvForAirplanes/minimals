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
  List,
  Tabs,
  Card,
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

import { getUsersQuery } from 'src/graphql/queries/users';
import { deleteUserMutation } from 'src/graphql/mutations/deleteUser';
import { updateUserListMutation } from 'src/graphql/mutations/userList';
import { userStatisticsQuery } from 'src/graphql/queries/userStatistics';
import {
  DeleteUserMutation,
  UserStatisticsQuery,
  UpdateUserListMutation,
  DeleteUserMutationVariables,
  UserStatisticsQueryVariables,
  UpdateUserListMutationVariables,
} from 'src/graphql/types/graphql';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';
import { ConfirmDialog } from 'src/components/custom-dialog';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

import UserQuickEditForm from './user-quick-edit-form';

export default function BlankView() {
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
      field: 'email',
      headerName: 'Account',
      editable: true,
      width: 310,
      renderCell: (d) => (
        <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            alt={d.row.firstName}
            src={`/api/avatars/user/${d.row.userName}`}
            sx={{ mr: 2 }}
          />
          <List>
            <ListItemText
              primary={`${d.row.firstName} ${d.row.lastName ?? ''}`}
              secondary={d.row.email}
              primaryTypographyProps={{ typography: 'body2' }}
              secondaryTypographyProps={{
                component: 'span',
                color: 'text.disabled',
              }}
            />
          </List>
        </TableCell>
      ),
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      editable: true,
      width: 160,
    },
    {
      field: 'businessName',
      headerName: 'Company',
      editable: true,
      width: 210,
    },
    {
      field: 'location',
      headerName: 'Location',
      editable: true,
      width: 200,
    },
    {
      field: 'approved',
      headerName: 'Status',
      editable: true,
      renderCell: (d) => (
        <TableCell style={{ display: 'flex', justifyContent: 'center' }}>
          <Label
            variant="soft"
            color={
              (d.row.approved === true && 'success') ||
              (d.row.sellerApproved === true && 'success') ||
              (d.row.approved === false && 'error') ||
              'info'
            }
          >
            {d.row.approved === true ? 'Approved' : ''}
            {d.row.seller === true ? 'Seller Approved' : ''}
            {d.row.approved === false ? 'Banned' : ''}
            {d.row.approved === null ? 'Pending' : ''}
          </Label>
        </TableCell>
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
              onClick={() => navigate(`/dashboard/user/${d.row.id}/edit`)}
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

  const [update] = useMutation<UpdateUserListMutation, UpdateUserListMutationVariables>(
    updateUserListMutation,
    {
      refetchQueries: [getUsersQuery],
    }
  );

  const [deleteUsers, { loading: deleting }] = useMutation<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >(deleteUserMutation, {
    variables: {
      ids: rowSelectionModel.map((m) => m as string),
      id: openedMenuId,
    },
    refetchQueries: [getUsersQuery],
    onCompleted: () => enqueueSnackbar('Successfully deleted users!', { variant: 'success' }),
  });

  const sort = useSorting([{ field: 'email', sort: 'asc' }]);
  const filter = useFiltering();
  const paging = usePaging({ filter, sort });
  const { data } = useQuery<UserStatisticsQuery, UserStatisticsQueryVariables>(userStatisticsQuery);

  const [currentFilter, setCurrentFilter] = useState<string>('All');
  const tabs = ['All', 'Approved', 'Pending', 'Rejected'];

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Users"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'User', href: paths.dashboard.user.root },
          { name: 'List' },
        ]}
        action={
          <Button
            component={RouterLink}
            href={paths.dashboard.user.new}
            variant="contained"
            startIcon={<Iconify icon="mingcute:add-line" />}
          >
            New User
          </Button>
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
            if (s === 'Approved') {
              filter.setFilter({
                items: [{ field: 'approved', operator: '=', value: true }],
              });
            } else if (s === 'All') {
              filter.setFilter();
            } else if (s === 'Pending') {
              filter.setFilter({
                items: [{ field: 'approved', operator: '=', value: null }],
              });
            } else if (s === 'Rejected') {
              filter.setFilter({
                items: [{ field: 'approved', operator: '=', value: false }],
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
                    (tab === 'Approved' && 'success') ||
                    (tab === 'Pending' && 'warning') ||
                    (tab === 'Rejected' && 'error') ||
                    'default'
                  }
                >
                  {tab === 'Approved' && (data?.userStatistics.approved ?? 0)}
                  {tab === 'Pending' && (data?.userStatistics.pending ?? 0)}
                  {tab === 'Rejected' && (data?.userStatistics.rejected ?? 0)}
                  {tab === 'All' && (data?.userStatistics.all ?? 0)}
                </Label>
              }
            />
          ))}
        </Tabs>

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
            checkboxSelection
            ignoreDiacritics
            editMode="cell"
            disableRowSelectionOnClick
            processRowUpdate={(updatedRow) =>
              update({
                variables: {
                  id: updatedRow.id,
                  profileEdit: updatedRow,
                },
              })
            }
            onProcessRowUpdateError={() =>
              enqueueSnackbar('User saved successfully.', { variant: 'success' })
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
              deleteUsers();
              confirmDelete.onFalse();
            }}
          >
            Delete
          </Button>
        }
      />
      {editingId ? (
        <UserQuickEditForm id={editingId ?? ''} open onClose={() => setEditingId(null)} />
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
