import React from "react";
import { Box, Typography, Container } from "@mui/material";
const discountItems = [
  { img: "/images/1.png" },
  { img: "/images/3.png" },
  { img: "/images/4.png" },
  { img: "/images/5.png" },
];
const Discount = () => {
  return (
    <Box
      sx={{
        marginTop: -45,
      }}
    >
      <Container>
        <Typography variant="h4" sx={{ color: "white", marginTop: "15%" }}>
          Top Vacation Destinations
        </Typography>
        <Box
          sx={{
            display: "flex",
            marginTop: "5%",
            gap: "30px",
            overflowX: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {discountItems.map((x, i) => {
            return (
              <Box key={i}>
                <Box>
                  <img
                    src={x.img}
                    alt=""
                    style={{
                      height: "250px",
                      borderRadius: "20px",
                    }}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Discount;
