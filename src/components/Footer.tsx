import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import SocialLinks from "./SocialLinks";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <Box component="footer">
      <Divider />
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          sx={{ py: 4, textAlign: 'center' }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </Typography>

          {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Built with React · TypeScript · Material UI
          </Typography> */}

          <SocialLinks />
        </Stack>
      </Container>
    </Box>
  );
}
