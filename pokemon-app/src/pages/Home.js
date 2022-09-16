import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import PokeCard from "../components/PokeCard";
import FetchApi from "../components/FetchApi";
import { LinearProgress, Box, Pagination, Stack } from "@mui/material/";
import styled from "styled-components";

const S = {
  StyledCardsWrapper: styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  `,

  StyledReactPaginateWrapper: styled(Box)`
    margin: 2%;
    display: flex;
    justify-content: center;
  `,
  StyledPagination: styled(Pagination)`
    .MuiPaginationItem-root {
      -webkit-box-shadow: 0 2px 12px -6px black;
      -moz-box-shadow: 0 2px 12px -6px black;
      box-shadow: 0 2px 12px -6px black;
    }
  `,
};

const Home = ({ searchValue, setPokemonEndpoint, pokemonEndpoint }) => {
  const [pageNumber, setPageNumber] = useState(1);
  let nav = useNavigate();
  const { data, status } = useQuery("pokemonData", FetchApi, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const filteredData = data?.filter((pokemon) => {
    if (searchValue === "") {
      return pokemon;
    } else {
      return pokemon.name.toLowerCase().includes(searchValue);
    }
  });

  const pokemonPerPage = 15;
  const pagesVisited = (pageNumber - 1) * pokemonPerPage;
  const pageCount = Math.ceil(filteredData?.length / pokemonPerPage);

  const changePage = (event, page) => {
    setPageNumber(page);
  };

  return (
    <Box margin={5}>
      {status === "loading" && <LinearProgress />}
      {status === "error" && <div> Error </div>}
      {status === "success" && (
        <S.StyledCardsWrapper>
          {filteredData
            ?.slice(pagesVisited, pagesVisited + pokemonPerPage)
            .map((pokemon) => {
              return (
                <PokeCard
                  key={pokemon.name}
                  name={pokemon.name}
                  img={pokemon.sprites.front_default}
                  height={pokemon.height}
                  weight={pokemon.weight}
                  exp={pokemon.base_experience}
                  ability={pokemon.abilities[0].ability.name}
                  onClick={() => {
                    setPokemonEndpoint(pokemon.name);
                    nav(`/${pokemon.name}`);
                  }}
                />
              );
            })}
        </S.StyledCardsWrapper>
      )}
      <S.StyledReactPaginateWrapper>
        <Stack spacing={2}>
          <S.StyledPagination
            count={pageCount}
            variant="outlined"
            shape="rounded"
            page={pageNumber}
            onChange={changePage}
            size="large"
            color="primary"
          />
        </Stack>
      </S.StyledReactPaginateWrapper>
    </Box>
  );
};

export default Home;
