import React, { useState } from "react";
import { useQuery } from "react-query";
import PokeCard from "../components/PokeCard";
import FetchApi from "../components/FetchApi";
import {
  Typography,
  CircularProgress,
  Box,
  Pagination,
  Stack,
} from "@mui/material/";
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
  StyledStack: styled(Stack)`
    -webkit-box-shadow: 0 2px 12px -6px black;
    -moz-box-shadow: 0 2px 12px -6px black;
    box-shadow: 0 2px 12px -6px black;
  `,
};

const Home = ({ searchValue }) => {
  const [pageNumber, setPageNumber] = useState(1);
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
      {status === "loading" && <CircularProgress />}
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
                />
              );
            })}
        </S.StyledCardsWrapper>
      )}
      <S.StyledReactPaginateWrapper>
        <Stack spacing={2}>
          <Pagination
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
