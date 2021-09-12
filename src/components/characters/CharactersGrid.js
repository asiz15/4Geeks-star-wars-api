import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CharacterCard } from "./CharacterCard.js";
import { DataContext } from "../../context/DataContext.js";
import axios from "axios";

export const CharactersGrid = () => {
  const { characters, setCharacters } = useContext(DataContext);
  const [loading, setLoading] = useState(false)
  const getCharacters = () => {
    
    axios
      .get("https://www.swapi.tech/api/people")
      .then((res) => {
        console.log(res);
        setCharacters(res.data.results);
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)});
  };
  useEffect(() => {
    setLoading(true)
    getCharacters();
  }, []);
  return (
    <div
      className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 flex justify-center items-center" style={{minHeight: '200px'}}>
      {!loading && characters.map((character) => {
        return <CharacterCard key={character.uid} character={character} />;
      })}
      {loading && (
        <h6>Loading characters...</h6>
      )}
    </div>
  );
};
