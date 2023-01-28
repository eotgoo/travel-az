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
        marginTop: -30,
      }}
    >
      <Container>
        <Typography variant="h4" sx={{ color: "white", marginTop: "15%" }}>
          Top Vacation Destinations
        </Typography>
        <Box sx={{ display: "flex", marginTop: "30px", gap: "30px" }}>
          {discountItems.map((x, i) => {
            return (
              <Box key={i}>
                <Box>
                  <img
                    src={x.img}
                    alt=""
                    style={{
                      width: "310px",
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
