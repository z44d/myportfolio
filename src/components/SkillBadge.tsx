import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';

interface SkillBadgeProps {
  label: string;
  accent: string;
}

export default function SkillBadge({ label, accent }: SkillBadgeProps) {
  return (
    <Chip
      label={
        <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75 }}>
          <Box
            aria-hidden
            component="span"
            className="skill-accent-dot"
            sx={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              bgcolor: accent,
              boxShadow: `0 0 6px ${alpha(accent, 0.7)}`,
              flexShrink: 0,
            }}
          />
          {label}
        </Box>
      }
      variant="outlined"
      sx={{
        borderColor: alpha(accent, 0.22),
        bgcolor: alpha(accent, 0.04),
        color: 'text.primary',
        fontWeight: 500,
        transition: 'all 0.2s ease',
        '&:hover': {
          color: accent,
          borderColor: alpha(accent, 0.55),
          bgcolor: alpha(accent, 0.1),
          transform: 'translateY(-2px)',
          '& .skill-accent-dot': {
            boxShadow: `0 0 10px ${alpha(accent, 0.95)}`,
          },
        },
      }}
    />
  );
}
