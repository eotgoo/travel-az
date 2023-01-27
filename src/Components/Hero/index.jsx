import React from "react";
import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import "@fontsource/roboto/700.css";
import ResponsiveAppBar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <Box>
      <Container>
        <Box>
          <Typography variant="h1" sx={{ color: "#fff", width: "750px" }}>
            The whole world awaits.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
