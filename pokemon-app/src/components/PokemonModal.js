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
} from "@mui/material/";
// import { useQuery } from "react-query";
import { styled } from "@mui/material/styles";
// import FetchPokemon from "./FetchPokemon";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#ffffef",
  border: "1px solid lightgray",
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
};

const PokemonModal = ({ open, setOpen, pokemonEndpoint }) => {
  const [singlePokemon, setSinglePokemon] = useState(null);
  const [pokemonImage, setPokemonImage] = useState(true);

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

  console.log(pokemonEndpoint);
  console.log(singlePokemon);
  const handleClose = () => {
    setOpen(false);
  };
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
                ? singlePokemon?.sprites?.front_default
                : singlePokemon?.sprites?.back_default
            }
            alt="green iguana"
          />
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="primary">
            {singlePokemon?.name}
          </Typography>
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
            <div>Types:</div>
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

{
  /* <CardActions>
<Button size="small" color="primary">
  Share
</Button>
</CardActions> */
}
// {` ${singlePokemon?.abilities[0].ability.name}, ${singlePokemon?.abilities[1]?.ability.name}`}

{
  /* <Typography variant="body2" color="text.secondary" component="div">
Health: {singlePokemon?.stats[0].base_stat}
</Typography>
<Typography variant="body2" color="text.secondary" component="div">
Attack: {singlePokemon?.stats[1].base_stat}
</Typography>
<Typography variant="body2" color="text.secondary" component="div">
Defense: {singlePokemon?.stats[2].base_stat}
</Typography>
<Typography variant="body2" color="text.secondary" component="div">
Special-attack: {singlePokemon?.stats[3].base_stat}
</Typography>
<Typography variant="body2" color="text.secondary" component="div">
Special-defence: {singlePokemon?.stats[4].base_stat}
</Typography>
<Typography variant="body2" color="text.secondary" component="div">
Speed: {singlePokemon?.stats[5].base_stat}
</Typography> */
}
