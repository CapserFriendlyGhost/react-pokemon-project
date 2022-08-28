import React from "react";

import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardActionArea,
  Button,
  Box,
  IconButton,
} from "@mui/material/";
import { styled } from "@mui/material/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const S = {
  MyCard: styled(Card)`
    margin: 1%;
    background-color: #ffffef;
    &:hover {
      -ms-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  `,
};

const PokeCard = ({ name, img, height, weight, exp, ability }) => {
  return (
    <S.MyCard>
      <CardMedia component="img" height="315" image={img} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="primary">
          {name}
        </Typography>
        <Box>
          <Typography variant="body2" color="text.secondary">
            Height: {height}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Weight: {weight}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Experience: {exp}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ability: {ability}
          </Typography>
        </Box>
      </CardContent>
    </S.MyCard>
  );
};

export default PokeCard;
