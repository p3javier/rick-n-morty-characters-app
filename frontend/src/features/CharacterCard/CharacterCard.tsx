import React from "react";
import { Character } from "../../types/characterInterface";
import "./characterCardStyles.css";
import { Link } from "react-router-dom";
import AddFavorite from "../AddFavorite/AddFavorite";
const CharacterCard = (props: Character) => {
  const { name, image, url } = props;
  return (
    <div className="card character-card container">
      <div className="row">
        <img src={image} alt={name} className="col-6" />
        <h2 className="col-6">
          <Link to={`/character/${url}`}>{name}</Link>
        </h2>
      </div>
      <div className="row">
        <Link className="details row col-4" to={`/character/${url}`}>
          View details
        </Link>

        <AddFavorite />
      </div>
    </div>
  );
};

export default CharacterCard;
