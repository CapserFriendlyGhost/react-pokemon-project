import React from "react";

const Fetch = () => {
  let infoArr = [];
  const FetchFullApi = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=151"
    );
    const result = await response.json();
    fetchPokeInfo(result);
    return;
  };

  FetchFullApi();

  const fetchPokeInfo = async (result) => {
    result.results.map(async (obj) => {
      const response2 = await fetch(obj.url);
      const result2 = await response2.json();
      infoArr.push(result2);
      return;
    });
  };

  return infoArr;
};

export default Fetch;
