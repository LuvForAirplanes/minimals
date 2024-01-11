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

import { getListingsQuery } from 'src/graphql/queries/listings';
import { getQuickListingQuery } from 'src/graphql/queries/quickListing';
import { updateQuickListingMutation } from 'src/graphql/mutations/updateQuickListing';
import {
  QuickListingQuery,
  QuickListingEditFragment,
  UpdateQuickListingMutation,
  QuickListingQueryVariables,
  UpdateQuickListingMutationVariables,
} from 'src/graphql/types/graphql';

import { useSnackbar } from 'src/components/snackbar';
import FormProvider, { RHFSwitch, RHFTextField } from 'src/components/hook-form';

type Props = {
  open: boolean;
  onClose: VoidFunction;
  id: string;
};

export default function ListingQuickEditForm({ id, open, onClose }: Props) {
  const { enqueueSnackbar } = useSnackbar();

  const UpdateUserSchema = Yup.object().shape({
    id: Yup.string().required('Id is required'),
    title: Yup.string().required('title is required'),
    serialNumber: Yup.string().notRequired(),
    partNumber: Yup.string().notRequired(),
    quantity: Yup.number().default(1).required('Quantity is required'),
    unit: Yup.string().required('Unit is required').default('ea'),
    price: Yup.number().required('Price is required'),
    msrp: Yup.number().notRequired(),
    isPublished: Yup.boolean().required('Published is required').default(true),
    acceptsOffers: Yup.boolean().required('Accepts offers is required').default(true),
  });

  const methods = useForm({
    resolver: yupResolver(UpdateUserSchema),
    defaultValues: {
      id: '',
      title: '',
      serialNumber: null,
      partNumber: null,
      quantity: 1,
      unit: 'ea',
      price: 0,
      msrp: null,
      isPublished: true,
      acceptsOffers: true,
    },
  });

  useQuery<QuickListingQuery, QuickListingQueryVariables>(getQuickListingQuery, {
    variables: {
      id,
    },
    skip: id === '',
    onCompleted: (data) => {
      const {
        id: idd,
        acceptsOffers,
        isPublished,
        price,
        quantity,
        title,
        unit,
        msrp,
        partNumber,
        serialNumber,
      } = data.quickListing as QuickListingEditFragment;
      methods.reset({
        id: idd,
        acceptsOffers,
        isPublished,
        price,
        quantity,
        title,
        unit,
        msrp,
        partNumber,
        serialNumber,
      });
    },
  });

  const [updateProfile] = useMutation<
    UpdateQuickListingMutation,
    UpdateQuickListingMutationVariables
  >(updateQuickListingMutation, {
    variables: {
      listing: methods.getValues(),
    },
    refetchQueries: [getListingsQuery],
  });

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
            <RHFTextField name="title" label="Title" />
            <RHFTextField name="serialNumber" label="Serial Number" />
            <RHFTextField name="partNumber" label="Part Number" />
            <RHFTextField name="quantity" label="Quantity" type="number" />
            <RHFTextField name="unit" label="Unit" />
            <RHFTextField name="price" label="Price" />
            <RHFTextField name="msrp" label="MSRP" />
            <RHFSwitch name="acceptsOffers" label="Accepts Offers" />
            <RHFSwitch name="isPublished" label="Published" />
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
