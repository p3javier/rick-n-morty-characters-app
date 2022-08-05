import React, { useState, useEffect } from "react";
import { getCharacter } from "../../services/getCharacter/getCharacter";
import { Character } from "../../types/characterInterface";
import ErrorPage from "../ErrorPage/ErrorPage";
import { convertUrlToId } from "../../utils/convertUrlToId";
import { useLocation } from "react-router-dom";
const TABLE_ELEMENTS: readonly string[] = ["status", "species", "gender"];

const CharacterDetail = () => {
  const [characterData, setCharacterData] = useState<Character>();
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const { status, data } = await getCharacter(
          convertUrlToId(location.pathname)
        );
        console.log("status", status);
        console.log("data", data);
        if (status === "ok" && data) {
          return setCharacterData(data);
        }
        return setError(true);
      } catch (error) {
        return console.error(error);
      }
    })();
    console.log("characterData", characterData);
  }, []);

  return error || !characterData ? (
    <ErrorPage />
  ) : (
    <div className="card character-detail">
      <div className="container">
        <div className="row">
          <img
            className="col-5"
            src={characterData.image}
            alt={characterData.name}
          />
          <div className="col-7">
            <h1>{characterData.name}</h1>
            <table className="striped">
              <thead>
                <tr>Data about {characterData.name}</tr>
              </thead>
              <tbody>
                {TABLE_ELEMENTS.map((element) => {
                  const index = TABLE_ELEMENTS.indexOf(element);
                  console.log(index);
                  return (
                    <tr key={element}>
                      <td>
                        <strong>{element}</strong>
                      </td>
                      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                      {/* @ts-ignore */}
                      <td>{characterData[TABLE_ELEMENTS[index]]}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td>
                    <strong>location</strong>
                  </td>

                  <td>{characterData.location.name}</td>
                </tr>
                <tr>
                  <td>
                    <strong>origin</strong>
                  </td>

                  <td>{characterData.location.name}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
//{TABLE_ELEMENTS.map((element) => {
//  return (
//    <tr key={element}>
//      <td>{element}</td>
//
//      <td>{characterData[element]}</td>
//    </tr>
//  );
// })}
