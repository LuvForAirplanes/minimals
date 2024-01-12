import { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { useMutation, useApolloClient } from '@apollo/client';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Rating } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { isDateInPastDay } from 'src/utils/extensions';
import { fCurrency, fShortenNumber } from 'src/utils/format-number';

import { toggleWatchMutation } from 'src/graphql/mutations/toggleWatch';
import {
  ToggleWatchMutation,
  ListingDetailsFragment,
  ToggleWatchMutationVariables,
} from 'src/graphql/types/graphql';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import FormProvider from 'src/components/hook-form';

import { ICheckoutItem } from 'src/types/checkout';

import IncrementerButton from './common/incrementer-button';

type Props = {
  product: ListingDetailsFragment;
  items?: ICheckoutItem[];
  disabledActions?: boolean;
  onGotoStep?: (step: number) => void;
  onAddCart?: (cartItem: ICheckoutItem) => void;
};

export default function ProductDetailsSummary({
  items,
  product,
  onAddCart,
  onGotoStep,
  disabledActions,
  ...other
}: Props) {
  const { id, price, title, quantity, msrp, added } = product;
  const { enqueueSnackbar } = useSnackbar();

  // const existProduct = !!items?.length && items.map((item) => item.id).includes(id);

  const isMaxQuantity =
    !!items?.length &&
    items.filter((item) => item.id === id).map((item) => item.quantity)[0] >= quantity;

  const defaultValues = {
    id,
    title,
    price,
    quantity: quantity < 1 ? 0 : 1,
    categoryName: product.category?.name,
    added,
  };

  const methods = useForm({
    defaultValues,
  });

  const { reset, watch, setValue, handleSubmit } = methods;

  const values = watch();

  useEffect(() => {
    if (product) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  const client = useApolloClient();
  const [toggleWatched] = useMutation<ToggleWatchMutation, ToggleWatchMutationVariables>(
    toggleWatchMutation,
    {
      variables: {
        listingId: product.id,
      },
      onCompleted: (d) => {
        if (d.toggleWatch) {
          enqueueSnackbar('Item placed on your watchlist.');
        } else {
          enqueueSnackbar('Item removed from your watchlist.');
        }
        console.log(client.cache.identify(product.id));
        client.cache.modify({
          id: `Listing:${product.id}`,
          fields: {
            watched() {
              return d.toggleWatch;
            },
          },
        });
      },
    }
  );

  const onSubmit = handleSubmit(async (data) => {
    // try {
    //   if (!existProduct) {
    //     onAddCart?.({
    //       ...data,
    //       colors: [values.colors],
    //       subTotal: data.price * data.quantity,
    //     });
    //   }
    //   onGotoStep?.(0);
    //   router.push(paths.product.checkout);
    // } catch (error) {
    //   console.error(error);
    // }
  });

  // const handleAddCart = useCallback(() => {
  //   try {
  //     onAddCart?.({
  //       ...values,
  //       colors: [values.colors],
  //       subTotal: values.price * values.quantity,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, [onAddCart, values]);

  const renderPrice = (
    <Box sx={{ typography: 'h5' }}>
      {msrp && (
        <Box
          component="span"
          sx={{
            color: 'text.disabled',
            textDecoration: 'line-through',
            mr: 0.5,
          }}
        >
          {fCurrency(msrp)}
        </Box>
      )}

      {fCurrency(price)}
    </Box>
  );

  const renderShare = (
    <Stack direction="row" spacing={3} justifyContent="center">
      <Link
        variant="subtitle2"
        sx={{
          color: 'text.secondary',
          display: 'inline-flex',
          alignItems: 'center',
        }}
        onClick={() => toggleWatched()}
      >
        <Iconify
          icon={product.watched ? 'solar:heart-bold' : 'solar:heart-outline'}
          width={16}
          sx={{ mr: 1 }}
        />
        Watch
      </Link>

      <Link
        variant="subtitle2"
        sx={{
          color: 'text.secondary',
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        <Iconify icon="solar:share-bold" width={16} sx={{ mr: 1 }} />
        Share
      </Link>
    </Stack>
  );

  const renderQuantity = (
    <Stack direction="row">
      <Typography variant="subtitle2" sx={{ flexGrow: 1 }}>
        Quantity
      </Typography>

      <Stack spacing={1}>
        <IncrementerButton
          name="quantity"
          quantity={values.quantity}
          disabledDecrease={values.quantity <= 1}
          disabledIncrease={values.quantity >= quantity}
          onIncrease={() => setValue('quantity', values.quantity + 1)}
          onDecrease={() => setValue('quantity', values.quantity - 1)}
        />
        <Typography variant="caption" component="div" sx={{ textAlign: 'right' }}>
          Available: {quantity}
        </Typography>
      </Stack>
    </Stack>
  );

  const renderActions = (
    <Stack direction="row" spacing={2}>
      <Button
        fullWidth
        disabled={isMaxQuantity || disabledActions}
        size="large"
        color="warning"
        variant="contained"
        startIcon={<Iconify icon="solar:cart-plus-bold" width={24} />}
        // onClick={handleAddCart}
        sx={{ whiteSpace: 'nowrap' }}
      >
        Add to Cart
      </Button>

      <Button fullWidth size="large" type="submit" variant="contained" disabled={disabledActions}>
        Buy Now
      </Button>
    </Stack>
  );
  const renderRating =
    product.ratings.length > 0 ? (
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          color: 'text.disabled',
          typography: 'body2',
        }}
      >
        <Rating
          size="small"
          value={product.ratingsAverage}
          precision={0.1}
          readOnly
          sx={{ mr: 1 }}
        />
        {`(${product.totalReviews === 0 ? '0' : fShortenNumber(product.totalReviews)} review${
          product.totalReviews === 1 ? '' : 's'
        })`}
      </Stack>
    ) : null;

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={3} sx={{ pt: 3 }} {...other}>
        <Stack spacing={2} alignItems="flex-start">
          {values.categoryName && (
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {values.categoryName}
            </Typography>
          )}

          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="h5">{title}</Typography>
            {isDateInPastDay(new Date(values.added)) && <Label color="info">New</Label>}
          </Stack>

          {renderRating}

          {renderPrice}
        </Stack>

        {renderQuantity}

        {renderActions}

        {renderShare}
      </Stack>
    </FormProvider>
  );
}
