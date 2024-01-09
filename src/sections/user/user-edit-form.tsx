import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { ChangeEvent, useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQuery, useMutation } from '@apollo/client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Alert,
  Button,
  styled,
  Tooltip,
  CardMedia,
  Typography,
  CardActionArea,
} from '@mui/material';

import { fData } from 'src/utils/format-number';

import { churchGroupsQuery } from 'src/graphql/queries/churchGroups';
import { getUserProfileQuery } from 'src/graphql/queries/userProfile';
import { updateUserMutation } from 'src/graphql/mutations/userProfile';
import { uploadUserBackgroundMutation } from 'src/graphql/mutations/uploadUserBackground';
import {
  UserMutation,
  UserProfileQuery,
  ChurchGroupsQuery,
  UserEditorFragment,
  UserMutationVariables,
  UserProfileQueryVariables,
  ChurchGroupsQueryVariables,
  UploadUserBackgroundImageMutation,
  UploadUserBackgroundImageMutationVariables,
} from 'src/graphql/types/graphql';

import { UploadAvatar } from 'src/components/upload';
import FormProvider, {
  RHFSwitch,
  RHFCheckbox,
  RHFTextField,
  RHFAutocomplete,
} from 'src/components/hook-form';

interface Props {
  setName: (name: string) => void;
}

export default function UserEditForm({ setName }: Props) {
  const params = useParams<{ id: string }>();
  const NewUserSchema = Yup.object().shape({
    id: Yup.string().required('Id is required'),
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
    emailVerified: Yup.boolean().default(false),
    phoneVerified: Yup.boolean().default(false),
    approved: Yup.boolean().default(true),
    sellerApproved: Yup.boolean().default(false),
    churchGroup: Yup.string().required('Church group is required'),
  });

  const defaultValues = {
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
    phoneVerified: false,
    emailVerified: false,
    approved: true,
    sellerApproved: false,
    churchGroup: '',
  };

  const { data: churchGroups } = useQuery<ChurchGroupsQuery, ChurchGroupsQueryVariables>(
    churchGroupsQuery
  );
  useQuery<UserProfileQuery, UserProfileQueryVariables>(getUserProfileQuery, {
    variables: {
      id: params.id ?? '',
    },
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
        churchGroup,
        emailVerified,
        phoneVerified,
      } = data.userProfile as UserEditorFragment;
      setName(`${firstName} ${lastName}`);
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
        churchGroup,
        emailVerified,
        phoneVerified,
      });
    },
  });
  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });
  const [updateUser] = useMutation<UserMutation, UserMutationVariables>(updateUserMutation, {
    variables: {
      id: methods.getValues().id,
      profileEdit: methods.getValues(),
    },
  });

  const { enqueueSnackbar } = useSnackbar();
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await updateUser({
        variables: {
          id: data.id,
          profileEdit: data,
        },
      });
      enqueueSnackbar('Sucessfully updated user!', { variant: 'success' });
      reset();
    } catch (error) {
      console.error(error);
    }
  });

  const [uploadBackground] = useMutation<
    UploadUserBackgroundImageMutation,
    UploadUserBackgroundImageMutationVariables
  >(uploadUserBackgroundMutation, {
    onCompleted: () => {
      (document.getElementById('backgroundImg') as HTMLImageElement).src = `${
        (document.getElementById('backgroundImg') as HTMLImageElement).src
      }?_=${new Date().getTime()}`;
    },
  });

  const handleBackgroundDrop = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files![0];

      if (file) {
        uploadBackground({
          variables: {
            id: params.id ?? '',
            file,
          },
        });
      }
    },
    [uploadBackground, params.id]
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <Tooltip title="Change header photo.">
            <Card sx={{ mb: 3 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={`/api/avatars/background/${methods.getValues().username}`}
                  onClick={() => (document.getElementsByClassName('vhi')[0] as HTMLElement).click()}
                  id="backgroundImg"
                />
                <VisuallyHiddenInput className="vhi" type="file" onChange={handleBackgroundDrop} />
              </CardActionArea>
            </Card>
          </Tooltip>
          <Card sx={{ pt: 10, pb: 5, px: 3, textAlign: 'center' }}>
            <UploadAvatar
              file="/api/avatars/user"
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
              <RHFTextField name="businessName" label="Business Name" />
              <RHFTextField name="username" label="Username" />
              <RHFTextField name="email" label="Email Address" />
              <RHFTextField name="phone" label="Phone Number" />
              <RHFCheckbox name="emailVerified" label="Email Verified" />
              <RHFCheckbox name="phoneVerified" label="Phone Verified" />
              <RHFCheckbox name="approved" label="Buyer Approved" />
              <RHFCheckbox name="sellerApproved" label="Seller Approved" />
            </Box>
            <RHFAutocomplete
              sx={{ mt: 3 }}
              name="churchGroup"
              label="Conference/Fellowship/Church Group"
              options={churchGroups?.churchGroups.map((g) => g.name) ?? []}
            />
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

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
