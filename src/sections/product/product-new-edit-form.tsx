import axios from 'axios';
import * as Yup from 'yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useResponsive } from 'src/hooks/use-responsive';

import { PRODUCT_CATEGORY_GROUP_OPTIONS } from 'src/_mock';
import { addListingMutation } from 'src/graphql/mutations/addListing';
import {
  AddListingMutation,
  ListingEditFragment,
  AddListingMutationVariables,
} from 'src/graphql/types/graphql';

import { useSnackbar } from 'src/components/snackbar';
import FormProvider, {
  RHFSelect,
  RHFEditor,
  RHFUpload,
  RHFSwitch,
  RHFTextField,
  RHFAutocomplete,
} from 'src/components/hook-form';

interface Props {
  product?: ListingEditFragment;
}

export default function ProductNewEditForm({ product }: Props) {
  const router = useRouter();

  const mdUp = useResponsive('up', 'md');

  const { enqueueSnackbar } = useSnackbar();

  const NewProductSchema = Yup.object().shape({
    title: Yup.string().required('title is required'),
    images: Yup.array().min(1, 'Image(s) is required'),
    content: Yup.string().required('Content is required').default(''),
    serialNumber: Yup.string().notRequired(),
    partNumber: Yup.string().notRequired(),
    quantity: Yup.number().default(1).required('Quantity is required'),
    categoryId: Yup.string().required('Category is required'),
    unit: Yup.string().required('Unit is required').default('ea'),
    price: Yup.number().required('Price is required'),
    msrp: Yup.number().notRequired(),
    isPublished: Yup.boolean().required('Published is required').default(true),
    acceptsOffers: Yup.boolean().required('Accepts offers is required').default(true),
  });
  const defaultValues = {
    title: product?.title ?? '',
    images:
      product?.images.map((i) => ({
        preview: `/api/listings/images/${i.id}`,
        path: i.id,
        name: i.id,
        lastModified: new Date(),
        size: 577081,
        type: 'image/jpeg',
        webkitRelativePath: '',
      })) ?? [],
    content: product?.content ?? '',
    serialNumber: product?.serialNumber ?? null,
    partNumber: product?.partNumber ?? null,
    quantity: product?.quantity ?? 1,
    categoryId: product?.categoryId ?? 'test',
    unit: product?.unit ?? 'ea',
    price: (product?.price as number | undefined) ?? 0,
    msrp: (product?.msrp as number | undefined) ?? null,
    isPublished: product?.isPublished ?? true,
    acceptsOffers: product?.acceptsOffers ?? true,
  };
  const methods = useForm({
    resolver: yupResolver(NewProductSchema),
    defaultValues,
  });

  // useEffect(() => {
  //   if (product) {
  //     const p = product.images[0];
  //     getFileFromUrl(`/api/listings/images/${p.id}`, p.id, 'image/jpeg').then((d) =>
  //       methods.setValue('images', [d])
  //     );
  //   }
  // }, [methods, product]);

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();
  console.log(values.images);

  // useEffect(() => {
  //   if (currentProduct) {
  //     reset(defaultValues);
  //   }
  // }, [currentProduct, defaultValues, reset]);

  const [addListing] = useMutation<AddListingMutation, AddListingMutationVariables>(
    addListingMutation
  );
  const uploadFile = async (id: string) => {
    // Create a new FormData object
    const formData = new FormData();

    // Append the file to the formData
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < values!.images!.length; i++) {
      formData.append('files', values!.images![i]);
    }

    // Send a POST request to the upload endpoint with the formData
    // and a header that specifies the content type as multipart/form-data
    try {
      await axios.post(`/api/listings/${id}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };
  const onSubmit = handleSubmit(async (data) => {
    try {
      const v = methods.getValues();
      await addListing({
        variables: {
          listing: {
            acceptsOffers: v.acceptsOffers,
            categoryId: v.categoryId,
            isPublished: v.isPublished,
            price: v.price,
            quantity: v.quantity,
            title: v.title,
            unit: v.unit,
            content: v.content,
            msrp: v.msrp,
            partNumber: v.partNumber,
            serialNumber: v.serialNumber,
          },
        },
      }).then((d) => uploadFile(d.data?.addListing));
      reset();
      enqueueSnackbar('Listing create success!');
      router.push(paths.dashboard.product.root);
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });
  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const files = values.images || [];
      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      setValue('images', [...files, ...newFiles], { shouldValidate: true });
    },
    [setValue, values.images]
  );

  const handleRemoveFile = useCallback(
    (inputFile: File | string) => {
      const filtered = values.images && values.images?.filter((file) => file !== inputFile);
      setValue('images', filtered);
    },
    [setValue, values.images]
  );

  const handleRemoveAllFiles = useCallback(() => {
    setValue('images', []);
  }, [setValue]);

  const renderDetails = (
    <>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Listing
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Title, short description, image...
          </Typography>
        </Grid>
      )}

      <Grid xs={12} md={8}>
        <Card>
          {!mdUp && <CardHeader title="Details" />}

          <Stack spacing={3} sx={{ p: 3 }}>
            <RHFTextField name="title" label="Title" />

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Content</Typography>
              <RHFEditor simple name="content" />
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Images</Typography>
              <RHFUpload
                multiple
                thumbnail
                name="images"
                maxSize={3145728}
                onDrop={handleDrop}
                onRemove={handleRemoveFile}
                onRemoveAll={handleRemoveAllFiles}
                onUpload={() => console.info('ON UPLOAD')}
              />
            </Stack>
          </Stack>
        </Card>
      </Grid>
    </>
  );

  const renderProperties = (
    <>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Details
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Additional information to improve your listing...
          </Typography>
        </Grid>
      )}

      <Grid xs={12} md={8}>
        <Card>
          {!mdUp && <CardHeader title="Properties" />}

          <Stack spacing={3} sx={{ p: 3 }}>
            <Box
              columnGap={2}
              rowGap={3}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
              }}
            >
              <RHFTextField name="serialNumber" label="Serial Number" />

              <RHFTextField name="partNumber" label="Part Number" />

              <RHFTextField
                name="quantity"
                label="Quantity"
                placeholder="0"
                type="number"
                InputLabelProps={{ shrink: true }}
              />

              <RHFSelect
                native
                name="categoryId"
                label="Category"
                InputLabelProps={{ shrink: true }}
              >
                {PRODUCT_CATEGORY_GROUP_OPTIONS.map((category) => (
                  <optgroup key={category.group} label={category.group}>
                    {category.classify.map((classify) => (
                      <option key={classify} value={classify}>
                        {classify}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </RHFSelect>
            </Box>
          </Stack>
        </Card>
      </Grid>
    </>
  );

  const renderPricing = (
    <>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Pricing
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Selling information...
          </Typography>
        </Grid>
      )}

      <Grid xs={12} md={8}>
        <Card>
          {!mdUp && <CardHeader title="Pricing" />}

          <Stack spacing={3} sx={{ p: 3 }} direction="row">
            <RHFTextField
              name="price"
              label="Price"
              placeholder="0.00"
              type="number"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Box component="span" sx={{ color: 'text.disabled' }}>
                      $
                    </Box>
                  </InputAdornment>
                ),
              }}
            />

            <RHFTextField
              name="msrp"
              label="MSRP/Original Price"
              placeholder="0.00"
              type="number"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Box component="span" sx={{ color: 'text.disabled' }}>
                      $
                    </Box>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Box
            display="flex"
            justifyContent="space-between"
            paddingLeft={3}
            paddingRight={4}
            paddingBottom={3}
          >
            <RHFAutocomplete
              name="unit"
              label="Unit/Sell By"
              freeSolo
              style={{ width: '100%', maxWidth: 340 }}
              options={['ea', 'box', 'case', 'pallet', 'all']}
            />

            <RHFSwitch name="acceptsOffers" label="Accepts Offers" />
          </Box>
        </Card>
      </Grid>
    </>
  );

  const renderActions = (
    <>
      {mdUp && <Grid md={4} />}
      <Grid xs={12} md={8} sx={{ display: 'flex', alignItems: 'center' }}>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Publish"
          name="isPublished"
          sx={{ flexGrow: 1, pl: 3 }}
        />

        <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting}>
          {/* {!currentProduct ? 'Create Product' : 'Save Changes'} */}
          Saves Changes
        </LoadingButton>
      </Grid>
    </>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        {renderDetails}

        {renderProperties}

        {renderPricing}

        {renderActions}
      </Grid>
    </FormProvider>
  );
}
