import React from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";

const Icons = [
  { icon: <CalendarTodayOutlinedIcon />, iconName: "Check in" },
  { icon: <CalendarTodayOutlinedIcon />, iconName: "Check out" },
  { icon: <PersonIcon />, iconName: "1 room ,2 adults" },
];
const Search = () => {
  return (
    <Box>
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.4)",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          backdropFilter: "blur(16px)",
          height: "60px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
        }}
      >
        <SearchIcon sx={{ color: "#fff", fontWeight: "700" }} />
        <Input
          sx={{ width: "25%", color: "#fff", border: "none" }}
          placeholder="Search destinations, hotels"
        />
        <Box sx={{ display: "flex", gap: "80px" }}>
          {Icons.map((x, i) => {
            return (
              <Button
                key={i}
                sx={{
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "700",
                }}
              >
                {x.icon}
                {x.iconName}
              </Button>
            );
          })}
        </Box>
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
  );
};

export default Search;
