import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const pages = ["Favourites", "Arena", "Sign Up", "Log in"];

const S = {
  MyAppBar: styled(AppBar)``,
  MyBox: styled(Box)`
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
  `,
  MyButton: styled(Button)`
    border: 1px solid transparent;
    display: block;
    color: white;
    margin: 1% 0;
    &:hover {
      background-color: #aed581;
      border: 1px solid white;
    }
  `,
  MyTypo: styled(Typography)`
    font-weight: 700;
    color: white;
    letter-spacing: 0.4rem;

    &:hover {
      cursor: pointer;
    }
  `,
};

const Navbar = () => {
  let nav = useNavigate();
  const [isArena, setIsArena] = useState(null);

  return (
    <S.MyAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CatchingPokemonIcon
            sx={{
              mr: 1,
              color: "white",
            }}
          />
          <S.MyTypo
            variant="h6"
            noWrap
            component="a"
            onClick={() => {
              nav("/");
            }}
          >
            Pokedex
          </S.MyTypo>

          <S.MyBox>
            {pages.map((page) => (
              <S.MyButton
                key={page}
                onClick={(e) => {
                  nav(
                    `/${e.target.innerText.toLowerCase().replace(/\s/g, "")}`
                  );
                }}
              >
                {page}
              </S.MyButton>
            ))}
          </S.MyBox>
        </Toolbar>
      </Container>
    </S.MyAppBar>
  );
};
export default Navbar;
