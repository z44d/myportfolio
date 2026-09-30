import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';

import { profile } from '../data/profile';
import XIcon from './icons/XIcon';

const socialItems = [
  { label: 'GitHub', url: profile.socials.github, Icon: GitHubIcon },
  { label: 'X (Twitter) — @0z44d', url: profile.socials.x, Icon: XIcon },
  { label: 'Telegram — @zaid.ballour', url: profile.socials.telegram, Icon: TelegramIcon },
];

interface SocialLinksProps {
  size?: 'small' | 'medium';
}

export default function SocialLinks({ size = 'small' }: SocialLinksProps) {
  return (
    <Stack direction="row" spacing={0.5} alignItems="center">
      {socialItems.map(({ label, url, Icon }) => (
        <Tooltip key={label} title={label}>
          <IconButton
            component="a"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            size={size}
            sx={{
              color: 'text.secondary',
              '&:hover': { color: 'primary.main', transform: 'translateY(-1px)' },
              transition: 'all 0.2s ease',
              // Keep icons at a comfortable tap size on touch screens.
              '@media (pointer: coarse)': { minWidth: 44, minHeight: 44 },
            }}
          >
            <Icon fontSize={size === 'small' ? 'small' : 'medium'} />
          </IconButton>
        </Tooltip>
      ))}
    </Stack>
  );
}

export { socialItems };
