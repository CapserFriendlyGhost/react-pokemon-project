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
import { useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import PokeCard from "../components/PokeCard";
import ClearIcon from "@mui/icons-material/Clear";
import WinnerDialog from "../components/WinnerDialog";

const S = {
  MyContainer: styled(Box)`
    height: 100%;
  `,
  FightButton: styled(Button)`
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
    flexDirection: "column",
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
  CancelButton: styled(IconButton)`
    position: absolute;
    display: flex;
    justify-content: end;
    margin-bottom: 180%;
    margin-left: 100%;
  `,
};

const Arena = ({ arena, setArena, setPokemonEndpoint }) => {
  const [firstPlace, setFirstPlace] = useState(null);
  const [secondPlace, setSecondPlace] = useState(null);
  const [fightButtonOff, setFightButtonOff] = useState(null);
  const [firstPlaceLose, setFirstPlaceLose] = useState(1);
  const [secondPlaceLose, setSecondPlaceLose] = useState(1);
  const [openWinnerDialog, setWinnerDialog] = useState(false);
  const [whoWon, setWhoWon] = useState(null);

  let nav = useNavigate();
  useEffect(() => {
    if (arena.length === 0) {
      setFirstPlace(false);
      setSecondPlace(false);
      setFightButtonOff(true);
    } else if (arena.length === 1) {
      setFirstPlace(true);
      setSecondPlace(false);
      setFightButtonOff(true);
    } else {
      setFirstPlace(true);
      setSecondPlace(true);
      setFightButtonOff(false);
    }
  }, [arena]);
  console.log(arena);
  const firstPokmon = arena[0]?.name;
  const secondPokemon = arena[1]?.name;
  console.log(firstPokmon);
  console.log(secondPokemon);

  const battle = () => {
    const firstPokeStats =
      arena[0]?.stats[1].base_stat * arena[0]?.stats[3].base_stat +
      arena[0]?.stats[2].base_stat * arena[0]?.stats[4].base_stat +
      arena[0]?.stats[0].base_stat * arena[0]?.base_experience;
    const secondPokeStats =
      arena[1]?.stats[1].base_stat * arena[0]?.stats[3].base_stat +
      arena[1]?.stats[2].base_stat * arena[0]?.stats[4].base_stat +
      arena[1]?.stats[0].base_stat * arena[0]?.base_experience;

    if (firstPokeStats > secondPokeStats) {
      setSecondPlaceLose(0.2);
      setWhoWon(true);
      setWinnerDialog(true);
      setFightButtonOff(true);
    } else if (firstPokeStats < secondPokeStats) {
      setFirstPlaceLose(0.2);
      setWhoWon(false);
      setWinnerDialog(true);
      setFightButtonOff(true);
    } else {
      alert("draw");
    }
  };

  return (
    <S.MyContainer>
      <S.ArenaWrapperBox>
        <S.CardPlaceholder sx={{ opacity: firstPlaceLose }}>
          {firstPlace ? (
            <>
              <S.CancelButton
                onClick={() => {
                  const arenaFilter = arena?.filter((pokemon) => {
                    return pokemon.name !== firstPokmon;
                  });
                  setArena(arenaFilter);
                }}
              >
                <ClearIcon fontSize="small" />
              </S.CancelButton>
              <PokeCard
                name={arena[0]?.name}
                img={arena[0]?.sprites.front_default}
                height={arena[0]?.height}
                weight={arena[0]?.weight}
                exp={arena[0]?.base_experience}
                ability={arena[0]?.abilities[0].ability.name}
                onClick={() => {
                  setPokemonEndpoint(arena[0]?.name);
                  nav(`/${arena[0]?.name}`);
                }}
              />
            </>
          ) : (
            <S.MyTypo component="div" color="text.secondary">
              <div>Choose a pokemon to Fight...</div>
            </S.MyTypo>
          )}
        </S.CardPlaceholder>
        <S.FightButton disabled={fightButtonOff} onClick={battle}>
          Fight!
        </S.FightButton>
        <S.CardPlaceholder sx={{ opacity: secondPlaceLose }}>
          {secondPlace ? (
            <>
              <S.CancelButton
                onClick={() => {
                  const arenaFilter = arena?.filter((pokemon) => {
                    return pokemon.name !== secondPokemon;
                  });
                  setArena(arenaFilter);
                }}
              >
                <ClearIcon fontSize="small" />
              </S.CancelButton>
              <PokeCard
                name={arena[1]?.name}
                img={arena[1]?.sprites.front_default}
                height={arena[1]?.height}
                weight={arena[1]?.weight}
                exp={arena[1]?.base_experience}
                ability={arena[1]?.abilities[0].ability.name}
                onClick={() => {
                  setPokemonEndpoint(arena[1]?.name);
                  nav(`/${arena[1]?.name}`);
                }}
              />
            </>
          ) : (
            <S.MyTypo component="div" color="text.secondary">
              <div>Choose a pokemon to fight...</div>
            </S.MyTypo>
          )}
        </S.CardPlaceholder>
      </S.ArenaWrapperBox>
      <WinnerDialog
        open={openWinnerDialog}
        whoWon={whoWon}
        setWinnerDialog={setWinnerDialog}
        arena={arena}
        setArena={setArena}
      />
    </S.MyContainer>
  );
};

export default Arena;
