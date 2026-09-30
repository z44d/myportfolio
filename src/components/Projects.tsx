import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { projects } from '../data/projects';
import Parallax from './Parallax';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';

export default function Projects() {
  return (
    <Box
      id="projects"
      component="section"
      sx={{ py: { xs: 8, md: 14 }, position: 'relative', overflow: 'hidden' }}
    >
      <Box aria-hidden sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'visible' }}>
        <Parallax
          speed={0.08}
          sx={{
            position: 'absolute',
            top: '10%',
            right: '-160px',
            width: 380,
            height: 380,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, transparent 65%)',
            filter: 'blur(60px)',
          }}
        />
        <Parallax
          speed={-0.04}
          sx={{
            position: 'absolute',
            bottom: '0%',
            left: '-140px',
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(100, 255, 218, 0.07) 0%, transparent 65%)',
            filter: 'blur(60px)',
          }}
        />
      </Box>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <SectionHeading
          overline="Selected Work"
          title="Projects"
          description="Open-source tools and platforms I have designed, built, and shipped — from subdomain routing and Telegram bot frameworks to CLI toolkits and local database servers."
        />
        <Grid container spacing={3} alignItems="stretch">
          {projects.map((project) => (
            <Grid key={project.id} item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
