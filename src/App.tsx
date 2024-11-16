import { Box } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { AboutMe } from "./components/AboutMe";

const styles = {
  background: "blue",
  width: "100%",
  height: "100%",
};

const App = () => {
  return (
    <Box sx={styles}>
      <Navbar />
      <AboutMe />
    </Box>
  );
};

export default App;
