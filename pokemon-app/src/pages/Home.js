import React from "react";
import { useQuery } from "react-query";
import PokeCard from "../components/PokeCard";
import FetchApi from "../components/FetchApi";
import { Typography, CircularProgress } from "@mui/material/";
import styled from "styled-components";

const S = {
  StyledCardsWrapper: styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  `,
};

const Home = () => {
  const { data, status } = useQuery("pokemonData", FetchApi);
  console.log(data);
  return (
    <div>
      <Typography>Home</Typography>
      {status === "loading" && <CircularProgress />}
      {status === "error" && <div> Error </div>}
      {status === "success" && (
        <S.StyledCardsWrapper>
          {data?.map((pokemon) => {
            return <PokeCard key={pokemon.name} name={pokemon.name} />;
          })}
        </S.StyledCardsWrapper>
      )}
    </div>
  );
};

export default Home;
