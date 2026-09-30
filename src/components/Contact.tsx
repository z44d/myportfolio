import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { profile } from '../data/profile';
import Parallax from './Parallax';
import SocialLinks from './SocialLinks';

export default function Contact() {
  return (
    <Box
      id="contact"
      component="section"
      sx={{ py: { xs: 8, md: 14 }, position: 'relative', overflow: 'hidden' }}
    >
      <Box aria-hidden sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <Parallax
          speed={0.06}
          sx={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            marginLeft: '-320px',
            width: 640,
            height: 640,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(100, 255, 218, 0.06) 0%, transparent 65%)',
            filter: 'blur(70px)',
          }}
        />
      </Box>
      <Container maxWidth="md" sx={{ position: 'relative' }}>
        <Box
          sx={{
            textAlign: 'center',
            px: { xs: 3, md: 8 },
            py: { xs: 6, md: 9 },
            borderRadius: 4,
            background: `linear-gradient(160deg, rgba(100, 255, 218, 0.05), rgba(167, 139, 250, 0.05))`,
            border: '1px solid',
            borderColor: 'divider',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography
            variant="overline"
            component="p"
            sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: '0.2em', mb: 1.5 }}
          >
            What&apos;s Next?
          </Typography>
          <Typography variant="h2" component="h2">
            Let&apos;s build something.
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mt: 2, maxWidth: 560, mx: 'auto' }}>
            Have a project, an idea, or a role where a backend-obsessed engineer would be useful?
            My inbox is always open — I&apos;ll get back to you.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1.5, sm: 2 }}
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            <Button
              component="a"
              href={`mailto:${profile.email}`}
              variant="contained"
              color="primary"
              size="large"
              startIcon={<EmailIcon />}
              disableElevation
              sx={{ width: { xs: '100%', sm: 'auto' } }}
            >
              Say Hello
            </Button>
            <Button
              component="a"
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="large"
              startIcon={<LinkedInIcon />}
              sx={{ width: { xs: '100%', sm: 'auto' } }}
            >
              LinkedIn
            </Button>
          </Stack>

          <Stack direction="row" justifyContent="center" sx={{ mt: 3 }}>
            <SocialLinks size="medium" />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
