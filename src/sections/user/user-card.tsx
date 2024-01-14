import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import { alpha, useTheme } from '@mui/material/styles';

import { AvatarShape } from 'src/assets/illustrations';
import { SocialUserFragment } from 'src/graphql/types/graphql';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  user: SocialUserFragment;
};

export default function UserCard({ user }: Props) {
  const theme = useTheme();

  const {
    id,
    fullName,
    userName,
    location,
    followers,
    following,
    listings,
    telegramUsername,
    phoneNumber,
    email,
  } = user;

  return (
    <Card sx={{ textAlign: 'center' }}>
      <CardActionArea component={Link} to={`/dashboard/user/${id}/edit`}>
        <Box sx={{ position: 'relative' }}>
          <AvatarShape
            sx={{
              left: 0,
              right: 0,
              zIndex: 10,
              mx: 'auto',
              bottom: -26,
              position: 'absolute',
            }}
          />

          <Avatar
            alt={fullName}
            src={`/api/avatars/user/${userName}`}
            sx={{
              width: 64,
              height: 64,
              zIndex: 11,
              left: 0,
              right: 0,
              bottom: -32,
              mx: 'auto',
              position: 'absolute',
            }}
          />

          <Image
            src={`/api/avatars/background/${userName}`}
            alt={userName ?? ''}
            ratio="16/9"
            overlay={alpha(theme.palette.grey[900], 0.48)}
          />
        </Box>

        <ListItemText
          sx={{ mt: 7, mb: 1 }}
          primary={fullName}
          secondary={location}
          primaryTypographyProps={{ typography: 'subtitle1' }}
          secondaryTypographyProps={{ component: 'span', mt: 0.5 }}
        />

        <Stack direction="row" alignItems="center" justifyContent="center" sx={{ mb: 2.5 }}>
          {telegramUsername && (
            <IconButton
              key="Telegram"
              sx={{
                color: '#0088CC',
                '&:hover': {
                  bgcolor: alpha('#0088CC', 0.08),
                },
              }}
              href={`https://t.me/${telegramUsername}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Iconify icon="ic:outline-telegram" />
            </IconButton>
          )}
          {email && (
            <IconButton
              key="Email"
              sx={{
                color: '#0088CC',
                '&:hover': {
                  bgcolor: alpha('#0088CC', 0.08),
                },
              }}
              href={`mailto:${email}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Iconify icon="ic:baseline-email" />
            </IconButton>
          )}
          {phoneNumber && (
            <IconButton
              key="Phone"
              sx={{
                color: '#0088CC',
                '&:hover': {
                  bgcolor: alpha('#0088CC', 0.08),
                },
              }}
              href={`tel:${phoneNumber}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Iconify icon="ic:baseline-local-phone" />
            </IconButton>
          )}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Box
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
          sx={{ py: 3, typography: 'subtitle1' }}
        >
          <div>
            <Typography variant="caption" component="div" sx={{ mb: 0.5, color: 'text.secondary' }}>
              Followers
            </Typography>
            {followers}
          </div>

          <div>
            <Typography variant="caption" component="div" sx={{ mb: 0.5, color: 'text.secondary' }}>
              Following
            </Typography>

            {following}
          </div>

          <div>
            <Typography variant="caption" component="div" sx={{ mb: 0.5, color: 'text.secondary' }}>
              Total Post
            </Typography>
            {listings}
          </div>
        </Box>
      </CardActionArea>
    </Card>
  );
}
