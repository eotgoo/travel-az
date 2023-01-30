import React from "react";
import Hero from "../../Components/Hero";
import ResponsiveAppBar from "../../Components/Navbar/Navbar";
import { Box } from "@mui/system";
import Discount from "../../Components/Content/Discount";
import AppDownlaod from "../../Components/Footer/AppDownlaod";
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url("/images/hdr.jpg")`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
        }}
      >
        <Hero />
      </Box>
      <Discount />
      <AppDownlaod />
      <Footer />
    </Box>
  );
};

export default HomePage;
