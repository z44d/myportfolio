import Box from '@mui/material/Box';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Parallax from './components/Parallax';

const ambientGlows = [
  {
    top: '-180px',
    left: '-120px',
    speed: 0.12,
    background: 'radial-gradient(circle, rgba(100, 255, 218, 0.16) 0%, transparent 65%)',
  },
  {
    top: '35%',
    right: '-200px',
    speed: -0.07,
    background: 'radial-gradient(circle, rgba(167, 139, 250, 0.13) 0%, transparent 65%)',
  },
  {
    bottom: '-220px',
    left: '20%',
    speed: 0.09,
    background: 'radial-gradient(circle, rgba(100, 255, 218, 0.08) 0%, transparent 65%)',
  },
] as const;

export default function App() {
  return (
    <Box sx={{ position: 'relative', minHeight: '100dvh', overflowX: 'clip' }}>
      <Box aria-hidden sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        {ambientGlows.map(({ speed, ...style }) => (
          <Parallax
            key={style.background}
            speed={speed}
            sx={{ position: 'absolute', width: 640, height: 640, filter: 'blur(90px)', ...style }}
          />
        ))}
      </Box>

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </Box>
    </Box>
  );
}
