import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Box, Divider, ListItemText } from "@mui/material";
import Container from "@mui/material/Container";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const footerItems = [
  {
    row1: "Contact Us",
    row2: "About",
    row3: "Other Services",
  },
  {
    row1: "Customer Support",
    row2: "Trip.com",
    row3: "Investor Relations",
  },
  {
    row1: "Service Guarantee",
    row2: "News",
    row3: "Trip.com Rewards",
  },
  {
    row1: "Website Feedback",
    row2: "Careers",
    row3: "Affiliate Program",
  },
  {
    row1: "",
    row2: "Terms & Conditions",
    row3: "List My Hotel",
  },
  {
    row1: "",
    row2: "Careers",
    row3: "All Hotels",
  },
  {
    row1: "",
    row2: "Privacy Statement",
    row3: "Become a Supplier",
  },
];
const icons = [
  { icon: <FacebookIcon></FacebookIcon> },
  { icon: <InstagramIcon></InstagramIcon> },
  { icon: <TwitterIcon></TwitterIcon> },
  { icon: <YouTubeIcon></YouTubeIcon> },
];
const Footer = () => {
  return (
    <Box>
      <Container>
        <List sx={{ width: "100%", bgcolor: "#fff" }}>
          {footerItems.map((x, i) => (
            <Box key={i} sx={{ display: "flex", alignItems: "center" }}>
              <ListItem>
                <ListItemText>{x.row1}</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>{x.row2}</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>{x.row3}</ListItemText>
              </ListItem>
            </Box>
          ))}
        </List>
        <Divider variant="middle" />
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {icons.map((x, i) => {
            return (
              <Box color="#000" key={i}>
                {x.icon}
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
