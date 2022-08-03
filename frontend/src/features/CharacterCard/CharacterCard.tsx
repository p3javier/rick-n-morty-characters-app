import React from "react";
import { Character } from "../../types/characterInterface";
import "./characterCardStyles.css";
import { Link } from "react-router-dom";

const CharacterCard = (props: Character) => {
  const { name, image, url } = props;
  return (
    <div className="card character-card">
      <img src={image} alt={name} />
      <h2>
        <Link to={`/character/${url}`}>{name}</Link>
      </h2>
    </div>
  );
};

export default CharacterCard;
