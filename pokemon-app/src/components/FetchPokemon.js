import React from "react";

const fetchPokemon = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/metapod/");
  const result = await response.json();

  return result;
};

export default fetchPokemon;
