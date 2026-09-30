import Box from '@mui/material/Box';
import type { BoxProps } from '@mui/material/Box';

import { useParallax } from '../hooks/useParallax';

interface ParallaxProps extends BoxProps {
  /** Scroll rate multiplier. Positive = background depth, negative = foreground. */
  speed?: number;
}

export default function Parallax({ speed = 0.1, sx, ...rest }: ParallaxProps) {
  const ref = useParallax<HTMLDivElement>(speed);
  return <Box ref={ref} sx={{ willChange: 'transform', ...sx }} {...rest} />;
}
