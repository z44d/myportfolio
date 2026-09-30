import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';

import { skillGroups } from '../data/skills';
import Parallax from './Parallax';
import SectionHeading from './SectionHeading';
import SkillBadge from './SkillBadge';

export default function Skills() {
  return (
    <Box
      id="skills"
      component="section"
      sx={{ py: { xs: 8, md: 14 }, position: 'relative', overflow: 'hidden' }}
    >
      <Box aria-hidden sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <Parallax
          speed={0.07}
          sx={{
            position: 'absolute',
            top: '5%',
            left: '-180px',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 65%)',
            filter: 'blur(60px)',
          }}
        />
        <Parallax
          speed={-0.05}
          sx={{
            position: 'absolute',
            bottom: '10%',
            right: '-150px',
            width: 340,
            height: 340,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(244, 114, 182, 0.07) 0%, transparent 65%)',
            filter: 'blur(60px)',
          }}
        />
      </Box>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <SectionHeading
          overline="Toolbox"
          title="Skills & Technologies"
          description="The languages, frameworks, and infrastructure I reach for when designing backend systems and developer tools."
        />
        <Grid container spacing={3}>
          {skillGroups.map((group) => (
            <Grid key={group.label} item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  height: '100%',
                  p: 3,
                  borderRadius: 3,
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid',
                  borderColor: 'divider',
                  backdropFilter: 'blur(10px)',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    borderColor: alpha(group.accent, 0.4),
                    boxShadow: `0 8px 32px ${alpha(group.accent, 0.07)}`,
                  },
                }}
              >
                <Typography
                  variant="overline"
                  component="h3"
                  sx={{
                    display: 'block',
                    color: group.accent,
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    mb: 2,
                  }}
                >
                  {group.label}
                </Typography>
                <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
                  {group.skills.map((skill) => (
                    <SkillBadge key={skill} label={skill} accent={group.accent} />
                  ))}
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
