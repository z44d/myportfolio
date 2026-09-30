import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DescriptionIcon from '@mui/icons-material/Description';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { alpha } from '@mui/material/styles';

import { navItems } from '../data/nav';
import SocialLinks from './SocialLinks';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: alpha('#0a0f16', 0.78),
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2, minHeight: { xs: 64, md: 68 } }}>
          <Link
            href="#about"
            aria-label="Back to top"
            sx={{
              mr: 'auto',
              display: 'inline-flex',
              alignItems: 'baseline',
              fontWeight: 700,
              fontSize: '1.25rem',
              letterSpacing: '-0.02em',
              color: 'text.primary',
            }}
          >
            z44d
            <Box component="span" sx={{ color: 'primary.main' }}>
              .
            </Box>
          </Link>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.href}
                href={item.href}
                sx={{
                  color: 'text.secondary',
                  fontWeight: 500,
                  px: 1.5,
                  '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              href="resume.html"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="small"
              startIcon={<DescriptionIcon />}
              sx={{ ml: 1 }}
            >
              Résumé
            </Button>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <SocialLinks />
          </Box>

          <IconButton
            aria-label="Open navigation menu"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: 'inline-flex', md: 'none' }, color: 'text.primary' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            bgcolor: 'background.paper',
            borderBottom: '1px solid',
            borderColor: 'divider',
            backgroundImage: 'none',
          },
        }}
      >
        <List sx={{ pt: 1, pb: 2, px: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item.href} sx={{ py: 0.5 }} disableGutters>
              <Button
                href={item.href}
                onClick={() => setOpen(false)}
                fullWidth
                sx={{ color: 'text.primary', fontWeight: 600, fontSize: '1.05rem', py: 1.2 }}
              >
                {item.label}
              </Button>
            </ListItem>
          ))}
          <ListItem sx={{ pt: 1.5, pb: 0.5 }} disableGutters>
            <Button
              href="resume.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              variant="outlined"
              startIcon={<DescriptionIcon />}
              fullWidth
              sx={{ fontWeight: 600, py: 1.2 }}
            >
              Résumé
            </Button>
          </ListItem>
          <ListItem sx={{ justifyContent: 'center', pt: 1 }}>
            <SocialLinks />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}
