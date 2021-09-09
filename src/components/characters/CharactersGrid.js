import React, { useEffect } from "react";
import { useContext } from "react";
import { CharacterCard } from "./CharacterCard.js";
import { DataContext } from "../../context/DataContext.js";
import axios from "axios";

export const CharactersGrid = () => {
  const { characters, setCharacters } = useContext(DataContext);
  const getCharacters = () => {
    axios
      .get("https://www.swapi.tech/api/people")
      .then((res) => {
        console.log(res);
        setCharacters(res.data.results);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <div
      className="flex flex-row flex-wrap gap-x-5 pb-5"

    >
      {characters.map((character) => {
        return <CharacterCard key={character.uid} character={character} />;
      })}
    </div>
  );
};
