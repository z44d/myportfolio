import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface SectionHeadingProps {
  overline: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ overline, title, description }: SectionHeadingProps) {
  return (
    <Box sx={{ mb: { xs: 4, md: 6 }, maxWidth: 640 }}>
      <Typography
        variant="overline"
        component="p"
        sx={{
          color: 'primary.main',
          fontWeight: 600,
          letterSpacing: '0.2em',
          mb: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Box component="span" aria-hidden sx={{ width: 28, height: '1px', bgcolor: 'primary.main', display: 'inline-block' }} />
        {overline}
      </Typography>
      <Typography variant="h2" component="h2">
        {title}
      </Typography>
      {description ? (
        <Typography variant="body1" sx={{ color: 'text.secondary', mt: 1.5 }}>
          {description}
        </Typography>
      ) : null}
    </Box>
  );
}
