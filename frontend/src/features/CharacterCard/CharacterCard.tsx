import React from "react";
import { Character } from "../../types/characterInterface";
import "./characterCardStyles.css";
import { Link } from "react-router-dom";
import AddFavorite from "../AddFavorite/AddFavorite";
import Hide from "../../components/Hide/Hide";

const CharacterCard = (props: Character) => {
  const { name, image, url } = props;
  return (
    <div className="card character-card container">
      <div className="row">
        <img src={image} alt={name} className="col-4" />
        <div className="col-8 parent">
          <div className="row">
            <h2 className="col-12">
              <Link to={`/character/${url}`}>{name}</Link>
            </h2>
          </div>
          <div className="row child">
            <Hide md lg xl>
              <Link className="details col-6" to={`/character/${url}`}>
                <div className="text-title">View details</div>
              </Link>

              <div className="col-6" style={{ flex: "display" }}>
                <div className="row">
                  <h4>Add to favorites</h4>
                  <AddFavorite />
                </div>
              </div>
            </Hide>
            <Hide sm>NUEVO</Hide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
