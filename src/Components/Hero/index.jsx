import React from "react";
import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import "@fontsource/roboto/700.css";
import Search from "./Search";
import Category from "./Category";

const Hero = () => {
  return (
    <Box>
      <Container>
        <Box>
          <Typography
            variant="h1"
            sx={{ paddingTop: "15%", color: "#fff", width: "750px" }}
          >
            The whole world awaits.
          </Typography>
          <Box>
            <Search />
          </Box>
          <Box>
            <Category />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
