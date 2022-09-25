import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  CardContent,
  CardMedia,
  CardActionArea,
  Button,
  Box,
  IconButton,
} from "@mui/material/";
import { styled } from "@mui/material/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import StadiumOutlinedIcon from "@mui/icons-material/StadiumOutlined";
import StadiumIcon from "@mui/icons-material/Stadium";
const S = {
  MyTypo: styled(Typography)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    & > div {
      margin-right: 10px;
    }
  `,
  MyBoxNameFav: styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    & > button {
      margin-left: 1.5%;
    }
  `,
  MyBoxContentWrapper: styled(Box)`
    width: 64%;
    margin-top: 5%;
    margin-left: 18%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid lightgray;
    border-radius: 0.5%;
    background-color: #ffffef;
    -webkit-box-shadow: 0 2px 15px -6px black;
    -moz-box-shadow: 0 2px 15px -6px black;
    box-shadow: 0 2px 15px -6px black;
  `,
  MyCardActionArea: styled(CardActionArea)`
    width: 55%;
  `,
  MyButton: styled(Button)`
    padding: 0;
  `,
};

const PokemonDetails = ({
  pokemonEndpoint,
  setFavourites,
  favourites,
  setArena,
  arena,
}) => {
  const [singlePokemon, setSinglePokemon] = useState(null);
  const [pokemonImage, setPokemonImage] = useState(true);
  const [isFav, setIsFav] = useState(null);
  const [isArena, setIsArena] = useState(null);
  let nav = useNavigate();

  useEffect(() => {
    const fetchPokemon = async (pokemonEndpoint) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonEndpoint}`
      );
      const json = await response.json();
      setSinglePokemon(json);
    };
    fetchPokemon(pokemonEndpoint);
    const includesFav = favourites.some((poke) => {
      return poke.name.includes(pokemonEndpoint);
    });

    setIsFav(includesFav);

    const includesArena = arena.some((poke) => {
      return poke.name.includes(pokemonEndpoint);
    });

    setIsArena(includesArena);
  }, [pokemonEndpoint, favourites, arena]);

  const addToFav = () => {
    const favSome = favourites?.some((pokemon) => {
      return pokemon.name === singlePokemon.name;
    });
    const favArr = [...favourites, singlePokemon];
    const favFilter = favourites?.filter((pokemon) => {
      return pokemon.name !== singlePokemon.name;
    });
    if (favSome === false) {
      setIsFav(true);
      setFavourites(favArr);
    } else {
      setIsFav(false);
      setFavourites(favFilter);
    }
  };
  const addToArena = () => {
    const arenaSome = arena?.some((pokemon) => {
      return pokemon.name === singlePokemon.name;
    });
    const arenaArr = [...arena, singlePokemon];
    const arenaFilter = arena?.filter((pokemon) => {
      return pokemon.name !== singlePokemon.name;
    });

    if (arena.length < 2) {
      if (arenaSome === false) {
        setIsArena(true);
        setArena(arenaArr);
      } else {
        setIsArena(false);
        setArena(arenaFilter);
      }
    } else if (arena.length === 2) {
      if (arenaSome === false) {
        alert("Arena is full");
      } else {
        setIsArena(false);
        setArena(arenaFilter);
      }
    } else {
      alert("Arena is full");
    }
  };

  return (
    <S.MyBoxContentWrapper>
      <S.MyCardActionArea
        onClick={() => {
          setPokemonImage(!pokemonImage);
        }}
      >
        <CardMedia
          component="img"
          image={
            pokemonImage
              ? singlePokemon?.sprites.front_default
              : singlePokemon?.sprites.back_default
          }
          alt={singlePokemon?.name}
        />
      </S.MyCardActionArea>
      <CardContent>
        <S.MyBoxNameFav>
          <Typography
            variant="h5"
            component="div"
            color="primary"
            sx={{ m: 0 }}
          >
            {singlePokemon?.name}
          </Typography>
          <IconButton onClick={addToFav}>
            {isFav ? (
              <Favorite color="primary" />
            ) : (
              <FavoriteBorderIcon color="text.secondary" />
            )}
          </IconButton>
          <IconButton onClick={addToArena}>
            {isArena ? (
              <StadiumIcon sx={{ mb: 0.3 }} color="primary" />
            ) : (
              <StadiumOutlinedIcon sx={{ mb: 0.3 }} />
            )}
          </IconButton>
        </S.MyBoxNameFav>
        <Typography variant="body2" color="text.secondary" component="div">
          Height: {singlePokemon?.height}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          Weight: {singlePokemon?.weight}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          Experience: {singlePokemon?.base_experience}
        </Typography>
        <S.MyTypo variant="body2" color="text.secondary" component="div">
          <div>Abilities:</div>
          {singlePokemon?.abilities.map((ability) => {
            return (
              <div key={ability.ability.name}>[{ability.ability.name}]</div>
            );
          })}
        </S.MyTypo>
        <Typography variant="body2" color="text.secondary" component="div">
          {singlePokemon?.stats.map((stats) => {
            return (
              <div key={stats.stat.name}>
                {stats.stat.name}: {stats.base_stat}
              </div>
            );
          })}
        </Typography>
        <S.MyTypo variant="body2" color="text.secondary" component="div">
          <div>Type:</div>
          {singlePokemon?.types.map((type) => {
            return <div key={type.type.name}>[{type.type.name}]</div>;
          })}
        </S.MyTypo>
        <S.MyButton
          onClick={() => {
            nav("/");
          }}
          size="large"
        >
          Back to home page
        </S.MyButton>
      </CardContent>
    </S.MyBoxContentWrapper>
  );
};

export default PokemonDetails;
