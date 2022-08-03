import React, { useState, useEffect } from "react";
import { getCharacter } from "../../services/getCharacter/getCharacter";
import { Character } from "../../types/characterInterface";
import ErrorPage from "../ErrorPage/ErrorPage";

const CharacterDetail = ({ url }: { url: string }) => {
  const [characterData, setCharacterData] = useState<Character>();
  const [error, setError] = useState(false);

  const idNumber = (url: string) => {
    const { pathname } = new URL(url);
    return parseInt(pathname.split("/")[3]);
  };

  useEffect(() => {
    (async () => {
      try {
        const { status, data } = await getCharacter(idNumber(url));
        if (status === "ok" && data) {
          setCharacterData(data);
        }
        setError(true);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return error || !characterData ? (
    <ErrorPage />
  ) : (
    <div className="card character-detail">
      <img src={characterData.image} alt={characterData.name} />
      <h1>{characterData.name}</h1>
    </div>
  );
};

export default CharacterDetail;
