import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQuery, useMutation } from '@apollo/client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import { updateUserMutation } from 'src/graphql/mutations/userProfile';
import { getQuickUserProfileQuery } from 'src/graphql/queries/quickUserProfile';
import {
  QuickUserMutation,
  QuickUserProfileQuery,
  QuickUserEditorFragment,
  QuickUserMutationVariables,
  QuickUserProfileQueryVariables,
} from 'src/graphql/types/graphql';

import { useSnackbar } from 'src/components/snackbar';
import FormProvider, { RHFTextField } from 'src/components/hook-form';

type Props = {
  open: boolean;
  onClose: VoidFunction;
  id: string;
};

export default function UserQuickEditForm({ id, open, onClose }: Props) {
  const { enqueueSnackbar } = useSnackbar();

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
      id: '',
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

  useQuery<QuickUserProfileQuery, QuickUserProfileQueryVariables>(getQuickUserProfileQuery, {
    variables: {
      id,
    },
    skip: id === '',
    onCompleted: (data) => {
      const {
        id: idd,
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
      } = data.quickUserProfile as QuickUserEditorFragment;
      methods.reset({
        id: idd,
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
  });

  const [updateProfile] = useMutation<QuickUserMutation, QuickUserMutationVariables>(
    updateUserMutation,
    {
      variables: {
        profileEdit: methods.getValues(),
        id,
      },
    }
  );

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await updateProfile();
      reset();
      onClose();
      enqueueSnackbar('Update success!');
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Dialog
      fullWidth
      maxWidth={false}
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { maxWidth: 720 },
      }}
    >
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <DialogTitle>Quick Update</DialogTitle>

        <DialogContent>
          <Box
            rowGap={3}
            columnGap={2}
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            }}
            style={{ marginTop: 5 }}
          >
            <RHFTextField name="firstName" label="First Name" />
            <RHFTextField name="lastName" label="Last Name" />
            <RHFTextField name="businessName" label="Business Name" />
            <RHFTextField name="email" label="Email Address" />
            <RHFTextField name="phone" label="Phone Number" />
            <RHFTextField name="username" label="Username" />
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
            <RHFTextField name="job" label="Job" />
          </Box>
        </DialogContent>

        <DialogActions>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>

          <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
            Update
          </LoadingButton>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
}
