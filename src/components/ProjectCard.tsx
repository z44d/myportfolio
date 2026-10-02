import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LaunchIcon from '@mui/icons-material/Launch';
import TelegramIcon from '@mui/icons-material/Telegram';
import TerminalIcon from '@mui/icons-material/Terminal';
import TranslateIcon from '@mui/icons-material/Translate';
import StorageIcon from '@mui/icons-material/Storage';
import DnsIcon from '@mui/icons-material/Dns';
import LinkIcon from '@mui/icons-material/Link';
import { alpha } from '@mui/material/styles';
import type { SvgIconProps } from '@mui/material/SvgIcon';

import type { Project, ProjectLinkKind } from '../types';

const projectIcons: Record<string, React.ComponentType<SvgIconProps>> = {
  domainak: DnsIcon,
  tgram: TelegramIcon,
  toolsx: TerminalIcon,
  trengine: TranslateIcon,
  serbase: StorageIcon,
  'short-url': LinkIcon,
};

const linkMeta: Record<
  ProjectLinkKind,
  { label: string; icon: React.ComponentType<SvgIconProps>; variant: 'outlined' | 'contained' }
> = {
  github: { label: 'GitHub', icon: GitHubIcon, variant: 'outlined' },
  pypi: { label: 'PyPI', icon: RocketLaunchIcon, variant: 'contained' },
  demo: { label: 'Live Demo', icon: LaunchIcon, variant: 'contained' },
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const Icon = projectIcons[project.id] ?? DnsIcon;

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
      <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Box
            aria-hidden
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 46,
              height: 46,
              borderRadius: 2.5,
              color: 'primary.main',
              background: `linear-gradient(135deg, ${alpha('#64ffda', 0.14)}, ${alpha(
                '#a78bfa',
                0.14,
              )})`,
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Icon />
          </Box>
          <Box>
            <Typography variant="h5" component="h3">
              {project.title}
            </Typography>
            <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 500 }}>
              {project.tagline}
            </Typography>
          </Box>
        </Box>

        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5 }}>
          {project.description}
        </Typography>

        <Stack
          direction="row"
          sx={{ mt: 'auto', flexWrap: 'wrap', gap: 0.75 }}
          aria-label={`${project.title} tech stack`}
        >
          {project.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                fontSize: '0.72rem',
                height: 24,
                color: 'text.secondary',
                bgcolor: 'rgba(148, 163, 184, 0.06)',
                borderColor: 'divider',
              }}
              variant="outlined"
            />
          ))}
        </Stack>
      </CardContent>

      <CardActions sx={{ px: 3, pb: 3, pt: 0, gap: 1.25 }}>
        {project.links.map((link) => {
          const meta = linkMeta[link.kind];
          const Icon = meta.icon;
          return (
            <Button
              key={link.url}
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variant={meta.variant}
              color="primary"
              size="small"
              startIcon={<Icon />}
              disableElevation
              sx={
                meta.variant === 'outlined'
                  ? undefined
                  : { bgcolor: 'rgba(100, 255, 218, 0.1)', color: 'primary.main' }
              }
            >
              {link.label ?? meta.label}
            </Button>
          );
        })}
      </CardActions>
    </Card>
  );
}
