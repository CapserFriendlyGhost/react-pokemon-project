import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Box,
} from "@mui/material/";
import { styled } from "@mui/material/styles";

const S = {
  MyCard: styled(Card)`
    border: 1px solid lightgray;
    margin: 1%;
    background-color: #ffffef;
    -webkit-box-shadow: 0 2px 15px -6px black;
    -moz-box-shadow: 0 2px 15px -6px black;
    box-shadow: 0 2px 15px -6px black;
    &:hover {
      -ms-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  `,
};

const PokeCard = ({ name, img, height, weight, exp, ability, onClick }) => {
  return (
    <S.MyCard onClick={onClick}>
      <CardActionArea>
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
      </CardActionArea>
    </S.MyCard>
  );
};

export default PokeCard;
