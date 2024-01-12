import * as Yup from 'yup';
import { useState, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQuery, useMutation } from '@apollo/client';

import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import FormHelperText from '@mui/material/FormHelperText';
import Dialog, { DialogProps } from '@mui/material/Dialog';

import { getListingQuery } from 'src/graphql/queries/listing';
import { myListingReviewQuery } from 'src/graphql/queries/myListingReview';
import { updateListingReviewMutation } from 'src/graphql/mutations/updateListingReview';
import {
  MyListingReviewQuery,
  ListingReviewEditFragment,
  UpdateListingReviewMutation,
  MyListingReviewQueryVariables,
  UpdateListingReviewMutationVariables,
} from 'src/graphql/types/graphql';

import FormProvider, { RHFTextField } from 'src/components/hook-form';

interface Props extends DialogProps {
  onClose: VoidFunction;
  listingId: string;
}

export default function ProductReviewNewForm({ onClose, listingId, ...other }: Props) {
  const ReviewSchema = Yup.object().shape({
    content: Yup.string().required('Review is required'),
    title: Yup.string().notRequired(),
    rating: Yup.number().min(1, 'Rating must be greater than or equal to 1'),
  });

  const defaultValues = {
    rating: 0,
    content: '',
    title: '',
  };

  const methods = useForm({
    resolver: yupResolver(ReviewSchema),
    defaultValues,
  });

  const [existingId, setExistingId] = useState<string | null>(null);
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  useQuery<MyListingReviewQuery, MyListingReviewQueryVariables>(myListingReviewQuery, {
    variables: {
      listingId,
    },
    onCompleted: (d) => {
      const data = d.myListingReview as ListingReviewEditFragment;
      setExistingId(data.id);
      methods.reset({
        content: data.content,
        rating: data.rating,
        title: data.title,
      });
    },
  });

  const [addReview] = useMutation<
    UpdateListingReviewMutation,
    UpdateListingReviewMutationVariables
  >(updateListingReviewMutation, {
    refetchQueries: [getListingQuery],
    onCompleted: (d) => {
      const data = d.updateListingReview as ListingReviewEditFragment;
      setExistingId(data.id);
      methods.reset({
        content: data.content,
        rating: data.rating,
        title: data.title,
      });
    },
  });
  const onSubmit = handleSubmit(async (data) => {
    try {
      const values = methods.getValues();
      await addReview({
        variables: {
          review: {
            content: values.content,
            listingId,
            rating: values.rating,
            title: values.title,
            id: existingId,
          },
        },
      });
      reset();
      onClose();
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const onCancel = useCallback(() => {
    onClose();
    reset();
  }, [onClose, reset]);

  return (
    <Dialog onClose={onClose} {...other}>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <DialogTitle> Add Review </DialogTitle>

        <DialogContent>
          <Stack direction="row" flexWrap="wrap" alignItems="center" spacing={1.5}>
            <Typography variant="body2">Your review about this product:</Typography>

            <Controller
              name="rating"
              control={control}
              render={({ field }) => (
                <Rating
                  {...field}
                  size="small"
                  value={Number(field.value)}
                  onChange={(event, newValue) => {
                    field.onChange(newValue as number);
                  }}
                />
              )}
            />
          </Stack>

          {!!errors.rating && <FormHelperText error> {errors.rating?.message}</FormHelperText>}

          <RHFTextField
            name="title"
            label="Title"
            placeholder="(title not required)"
            sx={{ mt: 3 }}
          />

          <RHFTextField
            name="content"
            label="Review *"
            multiline
            rows={3}
            sx={{ mt: 3 }}
            placeholder="Your review goes here..."
          />
        </DialogContent>

        <DialogActions>
          <Button color="inherit" variant="outlined" onClick={onCancel}>
            Cancel
          </Button>

          <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
            Post
          </LoadingButton>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
}
