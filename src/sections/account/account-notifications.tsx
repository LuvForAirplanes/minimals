import { useForm, Controller } from 'react-hook-form';
import { useQuery, useMutation } from '@apollo/client';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Unstable_Grid2';
import LoadingButton from '@mui/lab/LoadingButton';
import ListItemText from '@mui/material/ListItemText';
import FormControlLabel from '@mui/material/FormControlLabel';

import { getCurrentAccountNotificationsQuery } from 'src/graphql/queries/currentAccountNotifications';
import { updateCurrentAccountNotificationsMutation } from 'src/graphql/mutations/currentAccountNotifications';
import {
  CurrentAccountNotificationsQuery,
  AccountNotificationEditorFragment,
  CurrentAccountNotificationsQueryVariables,
  UpdateCurrentAccountNotificationsMutation,
  UpdateCurrentAccountNotificationsMutationVariables,
} from 'src/graphql/types/graphql';

import FormProvider from 'src/components/hook-form';
import { useSnackbar } from 'src/components/snackbar';

const NOTIFICATIONS = [
  {
    subheader: 'Activity',
    caption: 'General notifications through the application.',
    items: [
      {
        id: 'activity_comments',
        label: 'Notify me by SMS when somebody messages me directly.',
      },
    ],
  },
];

export default function AccountNotifications() {
  const { enqueueSnackbar } = useSnackbar();

  const methods = useForm({
    defaultValues: {
      selected: [''],
    },
  });

  const {
    watch,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const { data } = useQuery<
    CurrentAccountNotificationsQuery,
    CurrentAccountNotificationsQueryVariables
  >(getCurrentAccountNotificationsQuery, {
    onCompleted: (d) =>
      methods.reset({
        selected: (d.currentAccountNotifications as AccountNotificationEditorFragment)
          .notifyOnMessage
          ? ['activity_comments']
          : [],
      }),
  });

  const values = watch();

  const [updateNotifications] = useMutation<
    UpdateCurrentAccountNotificationsMutation,
    UpdateCurrentAccountNotificationsMutationVariables
  >(updateCurrentAccountNotificationsMutation);
  const onSubmit = handleSubmit(async (d) => {
    try {
      await updateNotifications({
        variables: {
          notificationsEdit: {
            id: (data!.currentAccountNotifications as AccountNotificationEditorFragment).id,
            notifyOnMessage: d.selected.includes('activity_comments'),
          },
        },
      });
      enqueueSnackbar('Update success!');
    } catch (error) {
      console.error(error);
    }
  });

  const getSelected = (selectedItems: string[], item: string) =>
    selectedItems.includes(item)
      ? selectedItems.filter((value) => value !== item)
      : [...selectedItems, item];

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack component={Card} spacing={3} sx={{ p: 3 }}>
        {NOTIFICATIONS.map((notification) => (
          <Grid key={notification.subheader} container spacing={3}>
            <Grid xs={12} md={4}>
              <ListItemText
                primary={notification.subheader}
                secondary={notification.caption}
                primaryTypographyProps={{ typography: 'h6', mb: 0.5 }}
                secondaryTypographyProps={{ component: 'span' }}
              />
            </Grid>

            <Grid xs={12} md={8}>
              <Stack spacing={1} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.neutral' }}>
                <Controller
                  name="selected"
                  control={control}
                  render={({ field }) => (
                    <>
                      {notification.items.map((item) => (
                        <FormControlLabel
                          key={item.id}
                          label={item.label}
                          labelPlacement="start"
                          control={
                            <Switch
                              checked={field.value.includes(item.id)}
                              onChange={() => field.onChange(getSelected(values.selected, item.id))}
                            />
                          }
                          sx={{
                            m: 0,
                            width: 1,
                            justifyContent: 'space-between',
                          }}
                        />
                      ))}
                    </>
                  )}
                />
              </Stack>
            </Grid>
          </Grid>
        ))}

        <LoadingButton type="submit" variant="contained" loading={isSubmitting} sx={{ ml: 'auto' }}>
          Save Changes
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
