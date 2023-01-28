import React from "react";
import Hero from "../../Components/Hero";
import ResponsiveAppBar from "../../Components/Navbar/Navbar";
import { Box } from "@mui/system";
import Discount from "../../Components/Content/Discount";

const HomePage = () => {
  return (
    <Box>
      <ResponsiveAppBar />
      <Box
        sx={{
          backgroundImage: `url("/images/hdr.jpg")`,
          backgroundRepeat: "repeat",
          position: "absolute",
          width: "100%",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Hero />
      </Box>
      <Discount />
    </Box>
  );
};

export default HomePage;
