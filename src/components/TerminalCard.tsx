import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { monoFontFamily } from '../theme';

interface TerminalLine {
  prompt?: boolean;
  text: string;
  color?: string;
}

const lines: TerminalLine[] = [
  { prompt: true, text: 'whoami' },
  { text: 'zaid — backend software engineer' },
  { prompt: true, text: 'cat stack.txt' },
  { text: 'typescript · python · sql' },
  { text: 'node · bun · hono' },
  { text: 'postgres · redis · sqlite' },
  { prompt: true, text: 'ls projects/' },
  { text: 'domainak/  tgram/  toolsx/' },
  { text: 'trengine/  serbase/  short-url/' },
  { prompt: true, text: 'status' },
  { text: 'all systems operational', color: 'success.main' },
];

export default function TerminalCard() {
  return (
    <Box
      sx={{
        fontFamily: monoFontFamily,
        fontSize: { xs: '0.75rem', sm: '0.875rem' },
        lineHeight: { xs: 1.75, sm: 1.9 },
        bgcolor: 'rgba(13, 20, 30, 0.85)',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 3,
        boxShadow: '0 24px 60px rgba(0, 0, 0, 0.45)',
        overflow: 'hidden',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.75,
          px: 2,
          py: 1.5,
          borderBottom: '1px solid',
          borderColor: 'divider',
          bgcolor: 'rgba(255, 255, 255, 0.02)',
        }}
      >
        {['#ff5f57', '#febc2e', '#28c840'].map((color) => (
          <Box
            key={color}
            aria-hidden
            sx={{ width: 11, height: 11, borderRadius: '50%', bgcolor: color, opacity: 0.85 }}
          />
        ))}
        <Typography
          variant="caption"
          sx={{ fontFamily: 'inherit', color: 'text.secondary', ml: 1.5, userSelect: 'none' }}
        >
          z44d@portfolio ~ zsh
        </Typography>
      </Box>

      <Box component="ul" sx={{ m: 0, p: { xs: 2, sm: 2.5 }, listStyle: 'none' }}>
        {lines.map((line, index) => (
          <Box key={index} component="li" sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            {line.prompt ? (
              <>
                <Box component="span" sx={{ color: 'primary.main', mr: 1 }}>
                  $
                </Box>
                <Box component="span" sx={{ color: 'text.primary' }}>
                  {line.text}
                </Box>
              </>
            ) : (
              <Box component="span" sx={{ color: line.color ?? 'text.secondary' }}>
                {line.color?.startsWith('success') ? '● ' : ''}
                {line.text}
              </Box>
            )}
          </Box>
        ))}
        <Box component="li" aria-hidden>
          <Box component="span" sx={{ color: 'primary.main', mr: 1 }}>
            $
          </Box>
          <Box
            component="span"
            sx={{
              display: 'inline-block',
              width: 9,
              height: 18,
              bgcolor: 'primary.main',
              verticalAlign: 'text-bottom',
              animation: 'blink 1.1s steps(2, start) infinite',
              '@keyframes blink': {
                to: { visibility: 'hidden' },
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
