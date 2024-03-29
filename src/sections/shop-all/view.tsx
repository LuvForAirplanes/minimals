import { m } from 'framer-motion';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { varFade, MotionContainer } from 'src/components/animate';

import ComponentHero from './component-hero';
import ComponentCard from './component-card';

// ----------------------------------------------------------------------

export default function ShopAllView() {
  return (
    <>
      <ComponentHero sx={{ py: 15 }}>
        <MotionContainer sx={{ textAlign: 'center' }}>
          <m.div variants={varFade().inUp}>
            <Typography variant="h3" component="h1">
              Browse All
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography sx={{ color: 'text.secondary', mt: 3 }}>
              Search. Buy. Done. Pretty simple, right?
            </Typography>
          </m.div>
        </MotionContainer>
      </ComponentHero>

      <Container sx={{ pt: 10, pb: 15 }}>
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography variant="h5">Your Interests</Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Items based off your selected preferences... <Link>Change them</Link>
            </Typography>
          </Stack>

          <Grid>
            <ComponentCard
              item={{
                href: '',
                image: '',
                name: "It's that great",
              }}
            />
          </Grid>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed', my: 8 }} />

        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography variant="h5">MUI</Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Components from{' '}
              <Link href="https://mui.com/components/" target="_blank" rel="noopener">
                Material UI
              </Link>
              .
            </Typography>

            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              <i>
                Some advanced components from MUI X will not be included. So you need to purchase a
                separate
                <Link
                  href="https://mui.com/pricing/"
                  target="_blank"
                  rel="noopener"
                  sx={{ ml: 0.5 }}
                >
                  license
                </Link>
                .
              </i>
            </Typography>
          </Stack>

          <Grid>
            <ComponentCard
              item={{
                href: '',
                image: '',
                name: "It's that great",
              }}
            />
          </Grid>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed', my: 8 }} />

        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography variant="h5">Extra Components</Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Some custom components / use 3rd party dependencies (chart, map, editor…).
            </Typography>
          </Stack>

          <Grid>
            <ComponentCard
              item={{
                href: '',
                image: '',
                name: "It's that great",
              }}
            />
          </Grid>
        </Stack>
      </Container>
    </>
  );
}

// ----------------------------------------------------------------------

function Grid({ children }: BoxProps) {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(2, 1fr)',
        sm: 'repeat(3, 1fr)',
        md: 'repeat(4, 1fr)',
        lg: 'repeat(6, 1fr)',
      }}
      gap={2.5}
    >
      {children}
    </Box>
  );
}
