// import * as React from "react";
// import {
//   Link,
//   MemoryRouter,
//   Route,
//   Routes,
//   useLocation,
// } from "react-router-dom";
// import { Pagination, PaginationItem } from "@mui/material/";

// function Content() {
//   const location = useLocation();
//   const query = new URLSearchParams(location.search);
//   const page = parseInt(query.get("page") || "1", 10);
//   return (
//     <Pagination
//       page={page}
//       count={10}
//       renderItem={(item) => (
//         <PaginationItem
//           component={Link}
//           to={`/inbox${item.page === 1 ? "" : `?page=${item.page}`}`}
//           {...item}
//         />
//       )}
//     />
//   );
// }

// export default function PaginationLink() {
//   return (
//     <MemoryRouter initialEntries={["/inbox"]} initialIndex={0}>
//       <Routes>
//         <Route path="*" element={<Content />} />
//       </Routes>
//     </MemoryRouter>
//   );
// }

import React, { useState } from "react";
import { useQuery } from "react-query";
import PokeCard from "../components/PokeCard";
import FetchApi from "../components/FetchApi";
import { Typography, CircularProgress, Box } from "@mui/material/";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { style } from "@mui/system";

const S = {
  StyledCardsWrapper: styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  `,

  StyledReactPaginateWrapper: styled(Box)`
    display: flex;
    justify-content: center;
  `,
};

const Home = ({ searchValue }) => {
  const [pageNumber, setPageNumber] = useState(0);
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
  const pagesVisited = pageNumber * pokemonPerPage;

  // const displayPokemons = filteredData
  //   ?.slice(pagesVisited, pagesVisited + pokemonPerPage)
  //   .map((pokemon) => {
  //     return (
  //       <PokeCard
  //         key={pokemon.name}
  //         name={pokemon.name}
  //         img={pokemon.sprites.front_default}
  //         height={pokemon.height}
  //         weight={pokemon.weight}
  //         exp={pokemon.base_experience}
  //         ability={pokemon.abilities[0].ability.name}
  //       />
  //     );
  //   });

  const pageCount = Math.ceil(filteredData?.length / pokemonPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
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
        <ReactPaginate
          previousLabel={<ArrowBackIcon />}
          nextLabel={<ArrowForwardIcon />}
          pageCount={pageCount}
          onPageChange={changePage}
        />
      </S.StyledReactPaginateWrapper>
    </Box>
  );
};

export default Home;

// return (
//   <Box margin={5}>
//     {status === "loading" && <CircularProgress />}
//     {status === "error" && <div> Error </div>}
//     {status === "success" && (
//       <S.StyledCardsWrapper>
//         {filteredData?.map((pokemon) => {
//           return (
//             <PokeCard
//               key={pokemon.name}
//               name={pokemon.name}
//               img={pokemon.sprites.front_default}
//               height={pokemon.height}
//               weight={pokemon.weight}
//               exp={pokemon.base_experience}
//               ability={pokemon.abilities[0].ability.name}
//             />
//           );
//         })}
//       </S.StyledCardsWrapper>
//     )}
//   </Box>
// );
