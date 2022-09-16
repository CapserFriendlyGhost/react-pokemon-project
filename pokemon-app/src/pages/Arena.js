import React, { useState, useEffect } from "react";
import {
  Typography,
  CardContent,
  CardMedia,
  CardActionArea,
  Container,
  Button,
  Box,
  IconButton,
} from "@mui/material/";
import { styled, alpha } from "@mui/material/styles";
import PokeCard from "../components/PokeCard";
import ClearIcon from "@mui/icons-material/Clear";

const S = {
  MyContainer: styled(Box)`
    height: 100%;
  `,
  MyButton: styled(Button)`
    height: 100%;
    font-size: xx-large;
  `,
  ArenaWrapperBox: styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    margin: 5% 5%;
  `,
  CardPlaceholder: styled(Box)(({ theme }) => ({
    width: "18%",
    height: "30%",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    border: "1px solid lightgray",
    borderRadius: theme.shape.borderRadius,
    webkitBoxShadow: "0 2px 15px -6px black",
    mozBoxShadow: "0 2px 15px -6px black",
    boxShadow: "0 2px 15px -6px black",
    backgroundColor: alpha(theme.palette.secondary.dark, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.secondary.dark, 0.3),
    },
  })),
  MyTypo: styled(Typography)`
    height: 521.09px;
    margin: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > div {
      padding: 27%;
    }
  `,
};

const Arena = ({ arena, setArena }) => {
  const [firstPlace, setFirstPlace] = useState(null);
  const [secondPlace, setSecondPlace] = useState(null);

  useEffect(() => {
    if (arena.length === 0) {
      setFirstPlace(false);
      setSecondPlace(false);
    } else if (arena.length === 1) {
      setFirstPlace(true);
      setSecondPlace(false);
    } else {
      setFirstPlace(true);
      setSecondPlace(true);
    }
  }, [arena]);
  console.log(arena);

  // POKECARD MUSI MIEC TEN CANCEL DO CARTY

  return (
    <S.MyContainer>
      <S.ArenaWrapperBox>
        <S.CardPlaceholder>
          {firstPlace ? (
            <PokeCard
              name={arena[0]?.name}
              img={arena[0]?.sprites.front_default}
              height={arena[0]?.height}
              weight={arena[0]?.weight}
              exp={arena[0]?.base_experience}
              ability={arena[0]?.abilities[0].ability.name}
            />
          ) : (
            <S.MyTypo component="div" color="text.secondary">
              <div>Choose a pokemon to Fight</div>
            </S.MyTypo>
          )}
        </S.CardPlaceholder>
        <S.MyButton>Fight!</S.MyButton>
        <S.CardPlaceholder>
          {secondPlace ? (
            <PokeCard
              name={arena[1]?.name}
              img={arena[1]?.sprites.front_default}
              height={arena[1]?.height}
              weight={arena[1]?.weight}
              exp={arena[1]?.base_experience}
              ability={arena[1]?.abilities[0].ability.name}
            />
          ) : (
            <S.MyTypo component="div" color="text.secondary">
              <div>Choose a pokemon to fight...</div>
            </S.MyTypo>
          )}
        </S.CardPlaceholder>
      </S.ArenaWrapperBox>
    </S.MyContainer>
  );
};

export default Arena;

// <IconButton>
// <ClearIcon />
// </IconButton>
