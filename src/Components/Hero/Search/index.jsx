import React from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <Box>
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.5)",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          backdropFilter: "blur(16px)",
          height: "60px",
          boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;",
        }}
      >
        <SearchIcon color="#fff" />
      </Box>
    </Box>
  );
};

export default Search;
