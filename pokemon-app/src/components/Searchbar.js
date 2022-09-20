import React from "react";
import { styled, alpha } from "@mui/material/styles";

import { AppBar, Box, Toolbar, InputBase, TextField } from "@mui/material/";
import SearchIcon from "@mui/icons-material/Search";

const S = {
  StyledAppBar: styled(AppBar)`
    border-top: 1px solid #8bc34a;
    -webkit-box-shadow: 0 2px 12px -6px black;
    -moz-box-shadow: 0 2px 12px -6px black;
    box-shadow: 0 2px 12px -6px black;
  `,

  StyledToolbar: styled(Toolbar)`
    display: flex;
    justify-content: flex-end;
    margin-right: 8.8%;
  `,
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "1px solid lightgray",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.secondary.dark, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.secondary.dark, 0.3),
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

const Searchbar = ({ setSearchValue }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <S.StyledAppBar position="static" color="secondary">
        <S.StyledToolbar>
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
        </S.StyledToolbar>
      </S.StyledAppBar>
    </Box>
  );
};

export default Searchbar;
