import { m } from 'framer-motion';
import { useQuery } from '@apollo/client';

import Badge from '@mui/material/Badge';
import { Tooltip } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { fToNow } from 'src/utils/format-time';

import { watchedListingsQuery } from 'src/graphql/queries/watchedListings';
import { WatchedListingsQuery, WatchedListingsQueryVariables } from 'src/graphql/types/graphql';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { varHover } from 'src/components/animate';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

export default function WatchedItemsPopover() {
  const popover = usePopover();

  const { data: watchedItems } = useQuery<WatchedListingsQuery, WatchedListingsQueryVariables>(
    watchedListingsQuery
  );

  const router = useRouter();

  return (
    <>
      <Tooltip title="My Watched Listings">
        <IconButton
          component={m.button}
          whileTap="tap"
          whileHover="hover"
          variants={varHover(1.05)}
          color={popover.open ? 'inherit' : 'default'}
          onClick={popover.onOpen}
          sx={{
            ...(popover.open && {
              bgcolor: (theme) => theme.palette.action.selected,
            }),
          }}
        >
          <Iconify icon="solar:watch-square-minimalistic-charge-bold-duotone" width={24} />
        </IconButton>
      </Tooltip>

      <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 320 }}>
        <Typography variant="h6" sx={{ p: 1.5 }}>
          Watched Items{' '}
          <Typography component="span">({watchedItems?.watchedListings.length ?? 0})</Typography>
        </Typography>

        <Scrollbar sx={{ height: 320 }}>
          {watchedItems?.watchedListings.map((listing, i) => (
            <MenuItem
              key={i}
              sx={{ p: 1 }}
              onClick={() => router.push(paths.listing.details(listing.listing.id))}
            >
              <Badge
                variant="online"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                sx={{ mr: 2 }}
              >
                <Avatar alt="listing image" src={`/api/listings/mainImage/${listing.listing.id}`} />
              </Badge>

              <ListItemText
                primary={listing.listing.title}
                secondary={`Watched ${fToNow(listing.date)}`}
                primaryTypographyProps={{ typography: 'subtitle2' }}
                secondaryTypographyProps={{
                  typography: 'caption',
                  color: 'text.disabled',
                }}
              />
            </MenuItem>
          ))}
        </Scrollbar>
      </CustomPopover>
    </>
  );
}
