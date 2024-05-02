import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import React from "react";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category, index) => {
        const isCategorySelected = category.name === selectedCategory;
        return (
          <button
            key={index}
            className="category-btn"
            style={{
              background: isCategorySelected && "#fc1503",
              color: "white",
            }}
            onClick={() => setSelectedCategory(category.name)}
          >
            <span
              style={{
                color: isCategorySelected ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {category.icon}
            </span>
            <span style={{ opacity: isCategorySelected ? "1" : "0.8" }}>
              {category.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
