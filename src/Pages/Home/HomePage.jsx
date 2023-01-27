import React from "react";
import Hero from "../../Components/Hero";
import ResponsiveAppBar from "../../Components/Navbar/Navbar";
import { Box } from "@mui/system";

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url("/images/header.jpg")`,
          backgroundRepeat: "repeat",
          position: "relative",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        {" "}
        <ResponsiveAppBar />
        <Grid sx={{ margoi }}>
          <Hero />
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
