import React from "react";

const FetchPokemon = async (pokemonEndpoint) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonEndpoint}`
  );
  const result = await response.json();

  return result;
};

export default FetchPokemon;
