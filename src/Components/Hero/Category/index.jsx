import { Box, Typography } from "@mui/material";
import React from "react";
import "@fontsource/roboto/700.css";
import { NavLink } from "react-router-dom";
import { Container } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
// const categoryItems = [
//   { img: "/images/image 4.png", name: "Beaches", href: "/Beaches" },
//   { img: "/images/image 16.png", name: "Deserts", href: "/Deserts" },
//   { img: "/images/image 3.png", name: "Mountains", href: "/Moutains" },
//   { img: "/images/image 16.png", name: "Iconic Cities", href: "/Cities" },
//   { img: "/images/image 17.png", name: "Houseboats", href: "/Houseboats" },
//   { img: "/images/image 10.png", name: "Countryside", href: "/Countrysid" },
//   { img: "/images/image 5.png", name: "Camping", href: "Camping" },
//   { img: "/images/image 12.png", name: "Casties", href: "/Casties" },
//   { img: "/images/image 15.png", name: "Skiing", href: "/Skiing" },
//   { img: "/images/image 8.png", name: "Tropical", href: "/Tropical" },
// ];

const Category = () => {
  const [categoryItems, setCategoryItems] = useState([]);

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:8000/categories");
      // console.log("response: ", res.data.data.categories);
      setCategoryItems(res.data.data.categories);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Container>
      <Box sx={{ marginTop: "10%" }}>
        <Typography variant="h4" color="white">
          Top Categories
        </Typography>
        <Box sx={{ display: "flex", gap: "50px" }}>
          {categoryItems.map((x, i) => {
            return (
              <Box key={i} sx={{ color: "#FFFFFF66", marginTop: "30px" }}>
                <img src={x.img} />
                <NavLink to={x.href} style={{ textDecoration: "none" }}>
                  <Typography sx={{ color: "#fff" }}>{x.name}</Typography>
                </NavLink>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default Category;
