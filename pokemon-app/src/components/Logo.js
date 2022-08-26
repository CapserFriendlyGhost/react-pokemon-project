import React from "react";
import { Typography } from "@mui/material/";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
const Logo = () => {
  return (
    <div>
      <CatchingPokemonIcon
        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
      />
      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Pokedex
      </Typography>
    </div>
  );
};

export default Logo;
