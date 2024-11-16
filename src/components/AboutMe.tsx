import { Box, Typography } from "@mui/material";

export const AboutMe = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <img
        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZyw5dzjtPdfoTnmX7XP_5oWSlq1Sp1HG4Ug&s`}
      />
      <Typography>Hello, It's me. I'm Sergei Piloyan</Typography>
    </Box>
  );
};
