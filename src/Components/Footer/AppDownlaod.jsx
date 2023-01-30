import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

const AppDownlaod = () => {
  return (
    <Box sx={{ marginTop: "10%" }}>
      <Box
        sx={{
          backgroundImage: `url("/images/footerbg.jpg")`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          height: "545px",
          position: "relative",
        }}
      >
        <Container>
          <Box>
            <Box
              sx={{
                display: "flex",
                position: "absolute",
                bottom: 0,
                margin: "auto",
              }}
            >
              <Box>
                <img src="/images/iPhone 13 Mockup.png" alt="" />
              </Box>
              <Box>
                <Typography variant="h2" color="white">
                  Your all-in-one travel app.
                </Typography>
                <Typography variant="h5" color="white" marginTop="3%">
                  Book flights, hotels, trains & rental cars anywhere in the
                  world in just seconds. Get real-time flight updates, travel
                  info, exclusive deals, and 30% more Trip Coins only on the
                  app!
                </Typography>
                <Box sx={{ display: "flex", marginTop: "3%", gap: "100px" }}>
                  <Box>
                    <Box sx={{ display: "flex", gap: "30px" }}>
                      <Button
                        sx={{
                          background: "#C490E4",
                          borderRadius: "16px",
                          color: "#fff",
                          "&:hover": {
                            color: "#2659C3",
                            backgroundColor: "#fff",
                          },
                        }}
                      >
                        Mobile
                      </Button>
                      <Button
                        sx={{
                          backgroundColor: "white",
                          color: "#2659C3",
                          borderRadius: "20px",
                          "&:hover": {
                            color: "#fff",
                            backgroundColor: "#C490E4",
                          },
                        }}
                      >
                        Email
                      </Button>
                    </Box>
                    <Typography color="#fff" marginTop="5%">
                      Enter your phone number to receive a text with a link to
                      download the app.
                    </Typography>
                    <Box
                      sx={{
                        background: "rgba(255, 255, 255, 0.4);",
                        borderRadius: "16px",
                        backdropFilter: "blur(16px)",
                        maxWidth: "462px",
                        height: "48px",
                        marginTop: "5%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Input
                        type="number"
                        defaultValue={1}
                        slotProps={{
                          input: {
                            min: 1,
                            max: 976,
                          },
                        }}
                      />
                      <Input placeholder=" Mobile Number" />
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "white",
                          color: "#2659C3",
                          borderRadius: "20px",
                          "&:hover": {
                            color: "#fff",
                            backgroundColor: "#C490E4",
                          },
                        }}
                      >
                        Search
                      </Button>
                    </Box>
                  </Box>
                  <Box>
                    <img src="/images/image 23.png" alt="" />
                    <Box>
                      <img src="/images/image 22.png" alt="" />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AppDownlaod;
