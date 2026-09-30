import { createTheme, alpha } from '@mui/material/styles';

const fontFamily = [
  'Alexandria',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
].join(',');

export const monoFontFamily = [
  'ui-monospace',
  'SFMono-Regular',
  'Menlo',
  'Consolas',
  '"Liberation Mono"',
  'monospace',
].join(',');

export const glass = {
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(148, 163, 184, 0.14)',
  backdropFilter: 'blur(10px)',
} as const;

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64ffda',
      contrastText: '#052e23',
    },
    secondary: {
      main: '#a78bfa',
    },
    success: {
      main: '#4ade80',
    },
    background: {
      default: '#0a0f16',
      paper: '#0e1520',
    },
    text: {
      primary: '#e6edf3',
      secondary: '#94a3b8',
    },
    divider: 'rgba(148, 163, 184, 0.16)',
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily,
    h1: {
      fontWeight: 700,
      fontSize: 'clamp(2.4rem, 5.5vw, 3.75rem)',
      lineHeight: 1.12,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.1rem',
    },
    subtitle1: {
      fontWeight: 500,
      lineHeight: 1.6,
    },
    body1: {
      lineHeight: 1.75,
    },
    body2: {
      lineHeight: 1.7,
    },
    button: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 10,
        },
        containedPrimary: {
          boxShadow: `0 4px 20px ${alpha('#64ffda', 0.25)}`,
          '&:hover': {
            boxShadow: `0 4px 28px ${alpha('#64ffda', 0.4)}`,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          ...glass,
          backgroundImage: 'none',
          transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme;
