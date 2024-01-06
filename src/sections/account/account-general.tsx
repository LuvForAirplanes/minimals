import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useState, useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQuery, useMutation } from '@apollo/client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Alert,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';

import { fData } from 'src/utils/format-number';

import { deleteUserMutation } from 'src/graphql/mutations/deleteUser';
import { uploadProfileMutation } from 'src/graphql/mutations/uploadAccountProfile';
import { getCurrentAccountProfileQuery } from 'src/graphql/queries/currentAccountProfile';
import { updateCurrentAccountProfileMutation } from 'src/graphql/mutations/currentAccountProfile';
import {
  DeleteUserMutation,
  CurrentAccountProfileQuery,
  DeleteUserMutationVariables,
  AccountProfileEditorFragment,
  UploadCurrentProfileImageMutation,
  CurrentAccountProfileQueryVariables,
  UpdateCurrentAccountProfileMutation,
  UploadCurrentProfileImageMutationVariables,
  UpdateCurrentAccountProfileMutationVariables,
} from 'src/graphql/types/graphql';

import { UploadAvatar } from 'src/components/upload';
import { useSnackbar } from 'src/components/snackbar';
import FormProvider, { RHFSwitch, RHFTextField } from 'src/components/hook-form';

export default function AccountGeneral() {
  const { enqueueSnackbar } = useSnackbar();
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const UpdateUserSchema = Yup.object().shape({
    id: Yup.string().required(),
    about: Yup.string().required('About is required'),
    businessName: Yup.string().nullable(),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    firstName: Yup.string().nullable(),
    job: Yup.string().default(''),
    lastName: Yup.string().nullable(),
    location: Yup.string().default(''),
    phone: Yup.string()
      .required('Phone number is required')
      .matches(/^[6-9]\d{9}$/, {
        message: 'Please enter a valid number',
        excludeEmptyString: false,
      })
      .default(''),
    telegramUsername: Yup.string().default(''),
    username: Yup.string().required('Username is required'),
    website: Yup.string().default(''),
  });

  const methods = useForm({
    resolver: yupResolver(UpdateUserSchema),
    defaultValues: {
      about: '',
      businessName: '',
      email: '',
      firstName: '',
      job: '',
      lastName: '',
      location: '',
      phone: '',
      telegramUsername: '',
      username: '',
      website: '',
    },
  });

  useQuery<CurrentAccountProfileQuery, CurrentAccountProfileQueryVariables>(
    getCurrentAccountProfileQuery,
    {
      onCompleted: (data) => {
        const {
          id,
          about,
          businessName,
          email,
          firstName,
          job,
          lastName,
          location,
          phone,
          telegramUsername,
          username,
          website,
        } = data.currentAccountProfile as AccountProfileEditorFragment;
        methods.reset({
          id,
          about,
          businessName: businessName ?? '',
          email: email ?? '',
          firstName,
          job: job ?? '',
          lastName,
          location: location ?? '',
          phone: phone ?? '',
          telegramUsername: telegramUsername ?? '',
          username: username ?? '',
          website: website ?? '',
        });
      },
    }
  );
  const [updateProfile] = useMutation<
    UpdateCurrentAccountProfileMutation,
    UpdateCurrentAccountProfileMutationVariables
  >(updateCurrentAccountProfileMutation, {
    variables: {
      profileEdit: methods.getValues(),
    },
  });
  const [deleteAccount, { loading: deleting }] = useMutation<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >(deleteUserMutation, {
    variables: {
      id: methods.getValues().id,
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await updateProfile();
      enqueueSnackbar('Update success!');
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const [uploadProfile] = useMutation<
    UploadCurrentProfileImageMutation,
    UploadCurrentProfileImageMutationVariables
  >(uploadProfileMutation);

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (file) {
        uploadProfile({
          variables: {
            file,
          },
        });
      }
    },
    [uploadProfile]
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <Card sx={{ pt: 10, pb: 5, px: 3, textAlign: 'center' }}>
            <UploadAvatar
              file="/api/avatars/user"
              maxSize={4000000}
              onDrop={handleDrop}
              helperText={
                <Typography
                  variant="caption"
                  sx={{
                    mt: 3,
                    mx: 'auto',
                    display: 'block',
                    textAlign: 'center',
                    color: 'text.disabled',
                  }}
                >
                  Allowed *.jpeg, *.jpg, *.png, *.gif
                  <br /> max size of {fData(3145728)}
                </Typography>
              }
            />

            <RHFSwitch
              name="isPublic"
              labelPlacement="start"
              label="Public Profile"
              disabled
              sx={{ mt: 5 }}
            />

            <Button variant="soft" color="error" sx={{ mt: 3 }} onClick={() => setIsDeleting(true)}>
              Delete Account
            </Button>
          </Card>
        </Grid>

        <Grid xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
              <RHFTextField name="firstName" label="First Name" />
              <RHFTextField name="lastName" label="Last Name" />
            </Box>

            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3, mb: 3 }}>
              <RHFTextField name="businessName" label="Business Name" />
            </Stack>

            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
              <RHFTextField name="email" label="Email Address" />
              <RHFTextField name="phone" label="Phone Number" />
            </Box>

            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3, mb: 3 }}>
              <RHFTextField name="username" label="Username" />
            </Stack>

            <Alert variant="outlined" severity="info" sx={{ mb: 3 }}>
              The information below is not required, but will help buyers to learn more about you
              and increase their level of trust.
            </Alert>

            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
              <RHFTextField
                name="telegramUsername"
                label="Telegram/CloudVeil Username"
                placeholder="e.g. @LuvForAirplanes"
              />
              <RHFTextField
                name="website"
                label="Website"
                placeholder="e.g. my-business-website.com"
              />
              <RHFTextField name="location" label="Location" placeholder="e.g. Myerstown, PA" />
              <RHFTextField
                name="job"
                label="Job/Occupation"
                placeholder="What you do for a job... (not required)"
              />
            </Box>

            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
              <RHFTextField name="about" multiline rows={4} label="About" />

              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                Save Changes
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
      <Dialog
        open={isDeleting}
        onClose={() => setIsDeleting(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete Account</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to permanently remove this user? This cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDeleting(false)}>Cancel</Button>
          <LoadingButton autoFocus color="error" loading={deleting} onClick={() => deleteAccount()}>
            Delete
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </FormProvider>
  );
}
