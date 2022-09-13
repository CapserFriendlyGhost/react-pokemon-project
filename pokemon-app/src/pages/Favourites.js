import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import PokeCard from "../components/PokeCard";
import {
  Typography,
  CircularProgress,
  LinearProgress,
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
  StyledPagination: styled(Pagination)`
    .MuiPaginationItem-root {
      -webkit-box-shadow: 0 2px 12px -6px black;
      -moz-box-shadow: 0 2px 12px -6px black;
      box-shadow: 0 2px 12px -6px black;
    }
  `,
  StyledTypo: styled(Typography)`
    display: flex;
    justify-content: center;
  `,
};
const Favourites = ({ favourites, searchValue, setPokemonEndpoint }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [isFavAdded, setIsFavAdded] = useState(null);
  let nav = useNavigate();

  useEffect(() => {
    favourites.length === 0 ? setIsFavAdded(true) : setIsFavAdded(false);
  }, [favourites]);

  const filteredData = favourites?.filter((pokemon) => {
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
      {isFavAdded ? (
        <S.StyledTypo variant="h6" component="div">
          No results found...
        </S.StyledTypo>
      ) : (
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

export default Favourites;
