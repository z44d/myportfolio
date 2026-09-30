import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import DescriptionIcon from "@mui/icons-material/Description";
import Grid from "@mui/material/Grid";
import Parallax from "./Parallax";
import Stack from "@mui/material/Stack";
import TerminalCard from "./TerminalCard";
import Typography from "@mui/material/Typography";
import { profile } from "../data/profile";
import type { Stat } from "../types";

const highlights = [
  'Backend Architecture',
  'APIs & Services',
  'Databases & Caching',
  'CLI Tooling',
  'Networking & Proxies',
];

const stats: Stat[] = [
  { value: '6', label: 'Open-source projects' },
  { value: '3', label: 'Packages on PyPI' },
  { value: '3', label: 'DB engines in one app' },
];

export default function Hero() {
  return (
    <Box id="about" component="section" sx={{ pt: { xs: 8, md: 14 }, pb: { xs: 8, md: 14 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography
              variant="overline"
              component="p"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                letterSpacing: '0.2em',
                mb: 2,
              }}
            >
              Introducing Myself
            </Typography>

            <Typography variant="h1" component="h1">
              {profile.name}
              <Box component="span" sx={{ color: 'primary.main' }}>
                .
              </Box>
            </Typography>

            <Typography
              variant="h3"
              component="p"
              sx={{
                mt: 1.5,
                color: 'text.secondary',
                fontWeight: 500,
                fontSize: { xs: '1.15rem', md: '1.35rem' },
              }}
            >
              {profile.role} — building high-performance APIs, CLI toolkits, Python libraries, and
              local database systems.
            </Typography>

            {/* <Typography variant="body1" sx={{ color: 'text.secondary', mt: 3, maxWidth: 640 }}>
              I design and ship complete end-to-end systems: high-performance APIs, SQL-backed
              services, caching layers, and the internal tooling that keeps them running. My work
              leans toward the infrastructure side of software — a custom subdomain routing platform
              powered by OpenResty and Redis, a Telegram Bot API library for Python, a multi-engine
              translation library with OCR, a Rust desktop app that runs local database servers
              without Docker, and a minimal URL shortener on Bun + Hono.
            </Typography> */}

            <Typography variant="body1" sx={{ color: 'text.secondary', mt: 2, maxWidth: 640 }}>
              I care about reliability, clean code, and turning complex product requirements into
              simple, scalable services for data-intensive applications.
            </Typography>

            <Stack
              direction="row"
              sx={{ mt: 3, flexWrap: 'wrap', gap: 1 }}
              aria-label="Focus areas"
            >
              {highlights.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  size="small"
                  sx={{
                    bgcolor: 'rgba(100, 255, 218, 0.06)',
                    border: '1px solid',
                    borderColor: 'rgba(100, 255, 218, 0.22)',
                    color: 'primary.main',
                  }}
                />
              ))}
            </Stack>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1.5, sm: 2 }}
              sx={{ mt: 4 }}
            >
              <Button
                href="#projects"
                variant="contained"
                color="primary"
                size="large"
                disableElevation
                sx={{ width: { xs: '100%', sm: 'auto' } }}
              >
                View Projects
              </Button>
              <Button
                href="resume.html"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                size="large"
                startIcon={<DescriptionIcon />}
                sx={{ width: { xs: '100%', sm: 'auto' } }}
              >
                Résumé
              </Button>
              <Button
                href="#contact"
                variant="outlined"
                size="large"
                sx={{ width: { xs: '100%', sm: 'auto' } }}
              >
                Get in Touch
              </Button>
            </Stack>

            <Box
              sx={{
                mt: { xs: 5, md: 6 },
                display: 'flex',
                gap: { xs: 4, md: 6 },
                flexWrap: 'wrap',
              }}
            >
              {stats.map((stat) => (
                <Box key={stat.label}>
                  <Typography variant="h4" component="p" sx={{ color: 'primary.main' }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Parallax speed={-0.05}>
              <TerminalCard />
            </Parallax>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
