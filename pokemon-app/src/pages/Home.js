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
  const { data, status } = useQuery("pokemonData", FetchApi, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: Infinity,
    cacheTime: 20000,
  });

  console.log(data);
  console.log(useQuery("pokemonData", FetchApi));
  return (
    <div>
      <Typography>Home</Typography>
      {status === "loading" && <CircularProgress />}
      {status === "error" && <div> Error </div>}
      {status === "success" && (
        <S.StyledCardsWrapper>
          {data?.map((pokemon) => {
            return (
              <PokeCard
                key={pokemon.name}
                name={pokemon.name}
                img={pokemon.sprites.front_default}
                height={pokemon.height}
                weight={pokemon.weight}
                exp={pokemon.base_experience}
                ability={pokemon.abilities[0].ability.name}
              />
            );
          })}
        </S.StyledCardsWrapper>
      )}
    </div>
  );
};

export default Home;
