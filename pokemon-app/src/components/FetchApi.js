import React from "react";

const FetchApi = () => {
  let infoArr = [];
  let urlArr = [];

  const fetchFullApi = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=151"
    );
    const result = await response.json();
    const { results: pokemon } = result;
    // console.log(pokemon);
    pokemon.map((obj) => {
      return urlArr.push(obj.url);
    });
    // console.log(urlArr);
    fetchPokeInfo(urlArr);
    return;
  };
  // console.log(urlArr);
  fetchFullApi();

  const fetchPokeInfo = (resultUrl) => {
    Promise.all(
      resultUrl.map(async (url) => {
        const response2 = await fetch(url);
        const result2 = await response2.json();
        // console.log(result2);
        return infoArr.push(result2);
      })
    );
    return;
  };

  fetchPokeInfo(urlArr);

  // console.log(infoArr);
  return infoArr;
};

export default FetchApi;
