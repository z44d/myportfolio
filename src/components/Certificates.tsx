import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { certificates } from '../data/certificates';
import CertificateCard from './CertificateCard';
import Parallax from './Parallax';
import SectionHeading from './SectionHeading';

export default function Certificates() {
  return (
    <Box
      id="certificates"
      component="section"
      sx={{ py: { xs: 8, md: 14 }, position: 'relative', overflow: 'hidden' }}
    >
      <Box aria-hidden sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <Parallax
          speed={0.06}
          sx={{
            position: 'absolute',
            top: '12%',
            right: '-170px',
            width: 360,
            height: 360,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(251, 191, 36, 0.08) 0%, transparent 65%)',
            filter: 'blur(60px)',
          }}
        />
        <Parallax
          speed={-0.05}
          sx={{
            position: 'absolute',
            bottom: '10%',
            left: '-150px',
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(100, 255, 218, 0.06) 0%, transparent 65%)',
            filter: 'blur(60px)',
          }}
        />
      </Box>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <SectionHeading
          overline="Verified Learning"
          title="Certificates"
          description="Formal certifications backing my fundamentals in TypeScript, JavaScript, SQL, Linux, the HTTP stack, and cybersecurity."
        />
        <Grid container spacing={3} alignItems="stretch">
          {certificates.map((certificate) => (
            <Grid key={certificate.id} item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
              <CertificateCard certificate={certificate} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
