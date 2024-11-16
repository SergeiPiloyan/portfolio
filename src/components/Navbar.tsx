import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const pages = ["Contacts", "About me", "Education", "Experience"];
const paths = ["contacts", "about", "education", "experience"];

export const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      // color="transparent"
      sx={{ boxShadow: "0", zIndex: 1000 }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            component="a"
            href="/"
            color="inherit"
            sx={{ textDecoration: "none" }}
          >
            LOGO
          </Typography>
          <Box>
            {pages.map((page, i) => (
              <Typography
                sx={{ textDecoration: "none" }}
                component={"a"}
                href={`#${paths[i]}`}
                key={`${page}_${i}`}
                color="inherit"
                mr={2}
              >
                {page}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
