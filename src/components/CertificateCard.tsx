import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import VerifiedIcon from '@mui/icons-material/Verified';
import { alpha } from '@mui/material/styles';

import type { Certificate } from '../types';

const verifyUrl = (certificate: Certificate) =>
  certificate.url ?? `https://www.boot.dev/certificates/${certificate.id}`;
const certImage = (certificate: Certificate) =>
  certificate.image === undefined
    ? `https://qvault-webapp-dynamic-assets.storage.googleapis.com/certificates/${certificate.id}.jpeg?v=1759937162`
    : certificate.image;

const imageSx = {
  width: '100%',
  aspectRatio: '16 / 10',
  objectFit: 'cover' as const,
  borderTopLeftRadius: '12px',
  borderTopRightRadius: '12px',
  borderBottom: '1px solid',
  borderBottomColor: 'divider',
};

interface CertificateCardProps {
  certificate: Certificate;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  const url = verifyUrl(certificate);
  const image = certImage(certificate);

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          transform: 'translateY(-4px)',
          borderColor: alpha('#64ffda', 0.35),
          boxShadow: `0 16px 48px ${alpha('#0a0f16', 0.6)}, 0 0 0 1px ${alpha('#64ffda', 0.12)}`,
        },
      }}
    >
      <Box
        component="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${certificate.title} certificate`}
        sx={{ display: 'block', lineHeight: 0 }}
      >
        {image ? (
          <Box
            component="img"
            src={image}
            alt={`${certificate.title} certificate`}
            loading="lazy"
            sx={{
              ...imageSx,
              transition: 'opacity 0.25s ease',
              opacity: 0.9,
              '.MuiCard:hover &': { opacity: 1 },
            }}
          />
        ) : (
          <Box
            sx={{
              ...imageSx,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1.5,
              background: `linear-gradient(135deg, ${alpha('#64ffda', 0.08)}, ${alpha(
                '#a78bfa',
                0.08,
              )})`,
            }}
          >
            <VerifiedIcon sx={{ fontSize: 44, color: 'primary.main' }} />
            <Typography
              variant="caption"
              sx={{ color: 'text.secondary', fontWeight: 600, letterSpacing: '0.12em' }}
            >
              {certificate.provider.toUpperCase()}
            </Typography>
          </Box>
        )}
      </Box>

      <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h5" component="h3" sx={{ fontSize: '1.05rem' }}>
          {certificate.title}
        </Typography>
        <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 500, mt: 0.5 }}>
          {certificate.provider} · {certificate.issued}
        </Typography>
        <Chip
          label={certificate.kind === 'project' ? 'Project' : 'Course'}
          size="small"
          variant="outlined"
          sx={{
            mt: 1.5,
            alignSelf: 'flex-start',
            height: 22,
            fontSize: '0.7rem',
            fontWeight: 600,
            color: certificate.kind === 'project' ? '#fbbf24' : 'text.secondary',
            borderColor:
              certificate.kind === 'project' ? alpha('#fbbf24', 0.35) : 'divider',
            bgcolor:
              certificate.kind === 'project' ? alpha('#fbbf24', 0.06) : 'transparent',
          }}
        />
      </CardContent>

      <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
        <Button
          component="a"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          color="primary"
          size="small"
          startIcon={<VerifiedIcon />}
        >
          Verify
        </Button>
      </CardActions>
    </Card>
  );
}
