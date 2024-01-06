import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useMutation } from '@apollo/client';

import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import {
  List,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  TableCell,
  IconButton,
  ListItemText,
} from '@mui/material';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';

import { getUsersQuery } from 'src/graphql/queries/users';
import { updateUserListMutation } from 'src/graphql/mutations/userList';
import { UpdateUserListMutation, UpdateUserListMutationVariables } from 'src/graphql/types/graphql';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';
import { ConfirmDialog } from 'src/components/custom-dialog';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

import { usePaging } from './usePaging';
import { useSorting } from './useSorting';
import { useFiltering } from './useFiltering';
import UserQuickEditForm from './user-table-row';

export default function BlankView() {
  const settings = useSettingsContext();
  const { enqueueSnackbar } = useSnackbar();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [openedMenuId, setOpenedMenuId] = useState<string | null>(null);
  const confirm = useBoolean();

  const quickEdit = useBoolean();

  const popover = usePopover();

  const columns: GridColDef[] = [
    {
      field: 'email',
      headerName: 'Account',
      editable: true,
      width: 300,
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
      width: 150,
    },
    {
      field: 'businessName',
      headerName: 'Company',
      editable: true,
      width: 200,
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
          <Tooltip title="Quick Edit" placement="top" arrow>
            <IconButton
              color={quickEdit.value ? 'inherit' : 'default'}
              onClick={() => {
                setEditingId(d.row.id);
                quickEdit.onTrue();
              }}
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

  const [update] = useMutation<UpdateUserListMutation, UpdateUserListMutationVariables>(
    updateUserListMutation,
    {
      refetchQueries: [getUsersQuery],
    }
  );

  const sort = useSorting([{ field: 'email', sort: 'asc' }]);
  const filter = useFiltering();
  const paging = usePaging({ filter, sort });

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
        <Box sx={{ height: 550, width: '100%' }}>
          <DataGrid
            {...paging.gridArgs}
            {...sort.gridArgs}
            {...filter.gridArgs}
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
            slots={{ toolbar: GridToolbar }}
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
      </Box>
      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 140 }}
      >
        <MenuItem
          onClick={() => {
            confirm.onTrue();
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
          Edit
        </MenuItem>
      </CustomPopover>

      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
        content="Are you sure want to delete?"
        action={
          <Button variant="contained" color="error" onClick={confirm.onFalse}>
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
