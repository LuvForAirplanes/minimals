import { useRef } from 'react';

import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';

import { useLocationLinks } from 'src/hooks/use-location-links';

import { fNumber } from 'src/utils/format-number';

import { ApplicationUser } from 'src/graphql/types/graphql';

import Iconify from 'src/components/iconify';

export default function ProfileHome({
  followers,
  following,
  location,
  email,
  telegramUsername,
  job,
  phoneNumber,
}: ApplicationUser) {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleAttach = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const locationLink = useLocationLinks(location ?? '', 'Google');

  const renderFollows = (
    <Card sx={{ py: 3, textAlign: 'center', typography: 'h4' }}>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
      >
        <Stack width={1}>
          {followers === 0 ? '0' : fNumber(followers)}
          <Box component="span" sx={{ color: 'text.secondary', typography: 'body2' }}>
            Followers
          </Box>
        </Stack>

        <Stack width={1}>
          {following === 0 ? '0' : fNumber(following)}
          <Box component="span" sx={{ color: 'text.secondary', typography: 'body2' }}>
            Following
          </Box>
        </Stack>
      </Stack>
    </Card>
  );

  const renderAbout = (
    <Card>
      <CardHeader title="About" />

      <Stack spacing={2} sx={{ p: 3 }}>
        <Box sx={{ typography: 'body2' }}>Contact Information</Box>

        {location && (
          <Stack direction="row" spacing={2}>
            <Iconify icon="mingcute:location-fill" width={24} />

            <Box sx={{ typography: 'body2' }}>
              {`Located in `}
              <Link variant="subtitle2" color="inherit" href={locationLink} target="_blank">
                {location}
              </Link>
            </Box>
          </Stack>
        )}

        {email && (
          <Stack direction="row" sx={{ typography: 'body2' }}>
            <Iconify icon="fluent:mail-24-filled" width={24} sx={{ mr: 2 }} />
            <Link href={`mailto:${email}`}>{email}</Link>
          </Stack>
        )}

        {phoneNumber && (
          <Stack direction="row" sx={{ typography: 'body2' }}>
            <Iconify icon="solar:phone-bold" width={24} sx={{ mr: 2 }} />
            <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
          </Stack>
        )}

        {job && (
          <Stack direction="row" spacing={2}>
            <Iconify icon="ic:round-business-center" width={24} />

            <Box sx={{ typography: 'body2' }}>
              Works at
              <Link variant="subtitle2" color="inherit">
                {job}
              </Link>
            </Box>
          </Stack>
        )}
      </Stack>
    </Card>
  );

  const renderPostInput = (
    <Card sx={{ p: 3 }}>
      <InputBase
        multiline
        fullWidth
        rows={4}
        placeholder="Share what you are thinking here..."
        sx={{
          p: 2,
          mb: 3,
          borderRadius: 1,
          border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.2)}`,
        }}
      />

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'text.secondary' }}>
          <Fab size="small" color="inherit" variant="softExtended" onClick={handleAttach}>
            <Iconify icon="solar:gallery-wide-bold" width={24} sx={{ color: 'success.main' }} />
            Image/Video
          </Fab>

          <Fab size="small" color="inherit" variant="softExtended">
            <Iconify icon="solar:videocamera-record-bold" width={24} sx={{ color: 'error.main' }} />
            Streaming
          </Fab>
        </Stack>

        <Button variant="contained">Post</Button>
      </Stack>

      <input ref={fileRef} type="file" style={{ display: 'none' }} />
    </Card>
  );

  const renderSocials = (
    <Card>
      <CardHeader title="Social" />

      <Stack spacing={2} sx={{ p: 3 }}>
        <Stack spacing={2} direction="row" sx={{ wordBreak: 'break-all', typography: 'body2' }}>
          <Iconify
            icon="ic:outline-telegram"
            width={24}
            sx={{
              flexShrink: 0,
              color: '#0088CC',
            }}
          />
          <Link color="inherit">{telegramUsername}</Link>
        </Stack>
      </Stack>
    </Card>
  );

  return (
    <Grid container spacing={3}>
      <Grid xs={12} md={4}>
        <Stack spacing={3}>
          {renderFollows}

          {renderAbout}

          {renderSocials}
        </Stack>
      </Grid>

      <Grid xs={12} md={8}>
        <Stack spacing={3}>
          {renderPostInput}

          {/* {posts.map((post) => (
            <ProfilePostItem key={post.id} post={post} />
          ))} */}
        </Stack>
      </Grid>
    </Grid>
  );
}
