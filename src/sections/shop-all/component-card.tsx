import { m } from 'framer-motion';

import Paper from '@mui/material/Paper';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import { RouterLink } from 'src/routes/components';

import Image from 'src/components/image';
import Label from 'src/components/label';
import { varHover, varTranHover } from 'src/components/animate';

// ----------------------------------------------------------------------

type Props = {
  item: {
    name: string;
    image: string;
    href: string;
  };
};

export default function ComponentCard({ item }: Props) {
  const { name, image, href } = item;

  return (
    <Paper
      component={RouterLink}
      href={href}
      variant="outlined"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        textDecoration: 'none',
        borderColor: (theme) => alpha(theme.palette.grey[500], 0.08),
      }}
    >
      <Label
        sx={{
          top: 4,
          right: 4,
          zIndex: 9,
          position: 'absolute',
        }}
      >
        New
      </Label>

      <CardActionArea
        component={m.div}
        whileHover="hover"
        sx={{
          p: 2.5,
          borderRadius: 0,
          color: 'text.secondary',
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
        }}
      >
        <m.div variants={varHover(1.1)} transition={varTranHover()}>
          <Image alt={name} src={image} />
        </m.div>
      </CardActionArea>

      <Typography variant="subtitle2" sx={{ p: 2, textAlign: 'center' }}>
        {name}
      </Typography>
    </Paper>
  );
}
