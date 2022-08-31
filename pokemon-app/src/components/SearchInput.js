import React, { useContext } from "react";
import { styled, alpha } from "@mui/material/styles";
import { InputBase, TextField, Box } from "@mui/material/";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { SearchContext } from "../context/SearchContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "2px dashed lightgray",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.secondary.dark, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.secondary.dark, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  fontSize: 20,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "12ch",
    },
  },
}));

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);
  const search = useContext(SearchContext);
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon fontSize="small" />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </Search>
  );
};

export default SearchInput;
