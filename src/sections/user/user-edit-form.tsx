import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import LoadingButton from '@mui/lab/LoadingButton';
import { Alert, Button, Tooltip, Typography } from '@mui/material';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { fData } from 'src/utils/format-number';

import { registerUserMutation } from 'src/graphql/mutations/registerUser';
import { RegisterUserMutation, RegisterUserMutationVariables } from 'src/graphql/types/graphql';

import { UploadAvatar } from 'src/components/upload';
import { useSnackbar } from 'src/components/snackbar';
import FormProvider, { RHFSwitch, RHFCheckbox, RHFTextField } from 'src/components/hook-form';

import { IUserItem } from 'src/types/user';

// ----------------------------------------------------------------------

type Props = {
  currentUser?: IUserItem;
};

export default function UserEditForm({ currentUser }: Props) {
  const router = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const NewUserSchema = Yup.object().shape({
    about: Yup.string().required('About is required'),
    businessName: Yup.string().nullable(),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string().required('Password is required'),
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
    emailVerified: Yup.boolean().default(false),
    phoneVerified: Yup.boolean().default(false),
    sendEmailVerification: Yup.boolean().default(false),
    sendPhoneVerification: Yup.boolean().default(false),
    approved: Yup.boolean().default(true),
    sellerApproved: Yup.boolean().default(false),
  });

  const defaultValues = {
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
    password: '',
    phoneVerified: false,
    emailVerified: false,
    sendPhoneVerification: false,
    sendEmailVerification: false,
    approved: true,
    sellerApproved: false,
  };

  const [registerUser] = useMutation<RegisterUserMutation, RegisterUserMutationVariables>(
    registerUserMutation
  );
  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const result = await registerUser({
        variables: {
          user: methods.getValues(),
        },
      });
      reset();
      enqueueSnackbar(currentUser ? 'Update success!' : 'Create success!');
      router.push(paths.dashboard.user.edit(result.data?.registerUser ?? ''));
    } catch (error) {
      console.error(error);
    }
  });
  console.log(methods.formState.errors);
  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <Card sx={{ pt: 10, pb: 5, px: 3, textAlign: 'center' }}>
            <UploadAvatar
              file="/api/avatars/user"
              disabled
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
                  <br /> max size of {fData(4000000)}
                </Typography>
              }
            />

            <Typography
              variant="caption"
              sx={{
                mt: 3,
                mx: 'auto',
                display: 'block',
                textAlign: 'center',
              }}
            >
              Save this user before uploading graphics.
            </Typography>

            <RHFSwitch
              name="isPublic"
              labelPlacement="start"
              label="Public Profile"
              disabled
              sx={{ mt: 5 }}
            />
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
              <RHFCheckbox name="emailVerified" label="Email Verified" />
              <RHFCheckbox name="phoneVerified" label="Phone Verified" />
              <RHFCheckbox
                name="sendEmailVerification"
                label="Send Email Verification"
                disabled={methods.watch().emailVerified}
              />
              <RHFCheckbox
                name="sendPhoneVerification"
                label="Send Phone Verification"
                disabled={methods.watch().phoneVerified}
              />
              <RHFTextField name="username" label="Username" />
              <RHFTextField name="password" label="Password" />
              <RHFCheckbox name="approved" label="Buyer Approved" />
              <RHFCheckbox name="sellerApproved" label="Seller Approved" />
            </Box>
          </Card>

          <Card sx={{ p: 3, mt: 3 }}>
            <Alert variant="outlined" severity="info" sx={{ mb: 3, mt: 2 }}>
              The information below is not required, but will help buyers to learn more about this
              user and increase their level of trust.
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
            </Stack>
          </Card>

          <Grid xs={12} md={8} style={{ marginTop: 20 }}>
            <Card
              sx={{ p: 3, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Button type="button" variant="outlined" href="/dashboard/user/list">
                Go Back
              </Button>
              <Tooltip title="Save this user's information.">
                <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                  Save Changes
                </LoadingButton>
              </Tooltip>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
