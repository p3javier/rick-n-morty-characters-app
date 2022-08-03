import React, { useState, useEffect } from "react";
import { getAllCharacters } from "../../services/getAllCharacters/getAllCharacters";
import CharacterCard from "../../features/CharacterCard/CharacterCard";
import { Character } from "../../types/characterInterface";
import "./dashboardStyles.css";
const Dashboard = () => {
  const [charactersList, setCharactersList] = useState<Character[]>([]);

  const handleGetCharacters = (response: any) => {
    if (response.status === "ok") {
      setCharactersList(response.data.results);
    }
  };
  useEffect(() => {
    getAllCharacters().then((response) => handleGetCharacters(response));
  }, []);
  return (
    <div className="container">
      <h1>List Of Characters</h1>
      <ul className="dashboard-list">
        {charactersList.map((character: Character) => {
          return (
            <li key={character.id}>
              <CharacterCard {...character} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dashboard;
