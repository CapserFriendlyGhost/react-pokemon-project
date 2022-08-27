import React from "react";

const FetchApi = async () => {
  let infoArr = [];
  let urlArr = [];

  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
  const result = await response.json();
  const resultValues = Object.values(result);
  const arrOfObj = resultValues[3];

  await arrOfObj.map((obj) => {
    return urlArr.push(obj.url);
  });

  await Promise.all(
    urlArr.map(async (url) => {
      const response2 = await fetch(url);
      const result2 = await response2.json();
      return infoArr.push(result2);
    })
  );

  return infoArr;
};

export default FetchApi;
