import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Modal,
  CircularProgress,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  CardActions,
  IconButton,
  Checkbox,
  Dialog,
} from "@mui/material/";
import { styled } from "@mui/material/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const label = { inputProps: { "aria-label": "controlled" } };

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#ffffef",
  border: "2px solid lightgray",
  borderRadius: 1.5,
  boxShadow: 24,
  p: 4,
};

const S = {
  MyTypo: styled(Typography)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    & > div {
      margin-right: 10px;
    }
  `,
  MyBox: styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
};

const PokemonModal = ({ open, setOpen, pokemonEndpoint }) => {
  const [singlePokemon, setSinglePokemon] = useState(null);
  const [pokemonImage, setPokemonImage] = useState(true);
  const [fav, setFav] = useState(false);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const fetchPokemon = async (pokemonEndpoint) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonEndpoint}`
      );
      const json = await response.json();
      setSinglePokemon(json);
    };
    fetchPokemon(pokemonEndpoint);
  }, [pokemonEndpoint]);

  const handleClose = () => {
    setOpen(false);
  };

  const addToFav = () => {
    setFav(!fav);
    setFavourites(...favourites, singlePokemon);
  };

  console.log(favourites);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <CardActionArea
          onClick={() => {
            setPokemonImage(!pokemonImage);
          }}
        >
          <CardMedia
            component="img"
            height="425"
            image={
              pokemonImage
                ? singlePokemon?.sprites.front_default
                : singlePokemon?.sprites.back_default
            }
            alt="green iguana"
          />
        </CardActionArea>
        <CardContent>
          <S.MyBox>
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
              {fav ? (
                <Favorite color="primary" />
              ) : (
                <FavoriteBorderIcon color="text.secondary" />
              )}
            </IconButton>
          </S.MyBox>

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
        </CardContent>
      </Box>
    </Modal>
  );
};

export default PokemonModal;
