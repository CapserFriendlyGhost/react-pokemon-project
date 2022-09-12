import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Favourites from "../pages/Favourites";
import Arena from "../pages/Arena";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Edition from "../pages/Edition";
import PokemonDetails from "../pages/PokemonDetails";

const AppRouter = ({ searchValue }) => {
  const [pokemonEndpoint, setPokemonEndpoint] = useState(null);
  const [favourites, setFavourites] = useState([]);
  console.log(favourites);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            searchValue={searchValue}
            setPokemonEndpoint={setPokemonEndpoint}
            pokemonEndpoint={pokemonEndpoint}
          />
        }
      />
      <Route
        path="/favourites"
        element={
          <Favourites
            favourites={favourites}
            searchValue={searchValue}
            setPokemonEndpoint={setPokemonEndpoint}
          />
        }
      />
      <Route path="/arena" element={<Arena />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/edition" element={<Edition />} />
      <Route
        path={`/${pokemonEndpoint}`}
        element={
          <PokemonDetails
            pokemonEndpoint={pokemonEndpoint}
            setFavourites={setFavourites}
            favourites={favourites}
          />
        }
      />
    </Routes>
  );
};

export default AppRouter;
