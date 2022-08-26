import React from "react";

import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material/";

const PokeCard = ({ name }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          POKEMON JAKIS TAM OPIS CZY COS TEXT
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Tekst 2 , wybierz PROPA wariant pozniej owrapuj i uloz z dsiplay flex
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default PokeCard;
