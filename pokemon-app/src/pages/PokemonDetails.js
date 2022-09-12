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

const PokemonDetails = ({ pokemonEndpoint, setFavourites, favourites }) => {
  const [singlePokemon, setSinglePokemon] = useState(null);
  const [pokemonImage, setPokemonImage] = useState(true);
  const [isFav, setIsFav] = useState(false);
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
    // const includesFav = favourites.map((poke) => {
    //   return poke.name.includes(pokemonEndpoint);
    // });
    // console.log(includesFav);
    // setIsFav(includesFav);
  }, [pokemonEndpoint]);

  const addToFav = () => {
    const favSome = favourites?.some((pokemon) => {
      return pokemon.name === singlePokemon.name;
    });
    const favArr = [...favourites, singlePokemon];
    if (favSome === false) {
      setIsFav(true);
      setFavourites(favArr);
    } else {
      alert("already added to favourites");
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
            gutterBottom
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