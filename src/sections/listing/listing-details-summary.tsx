import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useMutation, useApolloClient } from '@apollo/client';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  Dialog,
  Rating,
  Tooltip,
  TextField,
  IconButton,
  DialogTitle,
  DialogActions,
  DialogContent,
  InputAdornment,
  DialogContentText,
} from '@mui/material';

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
  listing: ListingDetailsFragment;
  items?: ICheckoutItem[];
  disabledActions?: boolean;
  onGotoStep?: (step: number) => void;
  onAddCart?: (cartItem: ICheckoutItem) => void;
};

export default function ListingDetailsSummary({
  items,
  listing,
  onAddCart,
  onGotoStep,
  disabledActions,
  ...other
}: Props) {
  const { id, price, title, quantity, msrp, added } = listing;
  const { enqueueSnackbar } = useSnackbar();

  // const existListing = !!items?.length && items.map((item) => item.id).includes(id);

  const isMaxQuantity =
    !!items?.length &&
    items.filter((item) => item.id === id).map((item) => item.quantity)[0] >= quantity;

  const defaultValues = {
    id,
    title,
    price,
    quantity: quantity < 1 ? 0 : 1,
    categoryName: listing.category?.name,
    added,
  };

  const methods = useForm({
    defaultValues,
  });

  const { reset, watch, setValue, handleSubmit } = methods;

  const values = watch();
  const [sharing, setSharing] = useState<boolean>(false);

  useEffect(() => {
    if (listing) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listing]);

  const client = useApolloClient();
  const [toggleWatched] = useMutation<ToggleWatchMutation, ToggleWatchMutationVariables>(
    toggleWatchMutation,
    {
      variables: {
        listingId: listing.id,
      },
      onCompleted: (d) => {
        if (d.toggleWatch) {
          enqueueSnackbar('Item placed on your watchlist.');
        } else {
          enqueueSnackbar('Item removed from your watchlist.');
        }
        console.log(client.cache.identify(listing.id));
        client.cache.modify({
          id: `Listing:${listing.id}`,
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
    //   if (!existListing) {
    //     onAddCart?.({
    //       ...data,
    //       colors: [values.colors],
    //       subTotal: data.price * data.quantity,
    //     });
    //   }
    //   onGotoStep?.(0);
    //   router.push(paths.listing.checkout);
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
          icon={listing.watched ? 'solar:heart-bold' : 'solar:heart-outline'}
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
        onClick={() => setSharing(true)}
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
    listing.ratings.length > 0 ? (
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
          value={listing.ratingsAverage}
          precision={0.1}
          readOnly
          sx={{ mr: 1 }}
        />
        {`(${listing.totalReviews === 0 ? '0' : fShortenNumber(listing.totalReviews)} review${
          listing.totalReviews === 1 ? '' : 's'
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
      <Dialog
        open={sharing}
        fullWidth
        onClose={() => setSharing(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Share Listing</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Copy this link to share with your friends:
          </DialogContentText>
          <TextField
            sx={{ mt: 1 }}
            fullWidth
            disabled
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Tooltip title="Copy to the clipboard.">
                    <IconButton
                      onClick={() => navigator.clipboard.writeText(document.location.href)}
                    >
                      <Iconify icon="solar:copy-bold-duotone" />
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              ),
            }}
            value={document.location.href}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSharing(false)} autoFocus>
            Got It
          </Button>
        </DialogActions>
      </Dialog>
    </FormProvider>
  );
}
