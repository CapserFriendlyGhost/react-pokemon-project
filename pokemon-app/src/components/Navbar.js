import * as React from "react";
import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
} from "@mui/material/";
import { styled } from "@mui/material/styles";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

const pages = ["Favourites", "Arena", "Log in", "Sign Up"];

const S = {
  MyBox: styled(Box)`
    display: flex;
    justify-content: flex-end;
  `,
  MyButton: styled(Button)`
    &:hover {
      background-color: #aed581;
    }
  `,
};

const Navbar = () => {
  const [route, setRoute] = useState("");

  const handleChangePage = (e) => {
    setRoute(e.target.innerText.toLowerCase().replace(/\s/g, ""));
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CatchingPokemonIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: "white",
              fontFamily: "Silkscreen",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Silkscreen",
              fontWeight: 700,
              letterSpacing: ".4rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            Pokedex
          </Typography>

          <S.MyBox sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <S.MyButton
                key={page}
                onClick={handleChangePage}
                href={`/${route}`}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </S.MyButton>
            ))}
          </S.MyBox>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
