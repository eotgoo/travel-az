import React from "react";
import Hero from "../../Components/Hero";
import ResponsiveAppBar from "../../Components/Navbar/Navbar";
import { Box } from "@mui/system";

const HomePage = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Box
        sx={{
          backgroundImage: `url("/images/header.jpg")`,
          backgroundRepeat: "repeat",
          position: "absolute",
          width: "100%",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Hero />
      </Box>
    </>
  );
};

export default HomePage;
