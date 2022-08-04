import React from "react";
import { Character } from "../../types/characterInterface";
import "./characterCardStyles.css";
import { Link } from "react-router-dom";
import AddFavorite from "../AddFavorite/AddFavorite";
import Hide from "../../components/Hide/Hide";
import { convertUrlToId } from "../../utils/convertUrlToId";

const CharacterCard = (props: Character) => {
  const { name, image, url } = props;
  const id = convertUrlToId(url);
  return (
    <div className="card character-card container">
      <div className="row">
        <img src={image} alt={name} className="col-4" />
        <div className="col-8 parent">
          <div className="row">
            <h2 className="col-12">
              <Link to={`/character/${id}`}>{name}</Link>
            </h2>
          </div>
          <div className="row child">
            <Hide mdUp>
              <Link className="details col-6" to={`/character/${id}`}>
                <div className="text-title">View details</div>
              </Link>

              <div className="col-6" style={{ flex: "display" }}>
                <div className="row">
                  <h4>Add to favorites</h4>
                  <AddFavorite />
                </div>
              </div>
            </Hide>
            <Hide sm>
              <div className="container">
                <div className="row">
                  <Link
                    className="details col"
                    to={`/character/${id}`}
                    style={{ maxWidth: "unset" }}
                  >
                    <div className="text-title">View details</div>
                  </Link>
                </div>
                <div className="row">
                  <div style={{ display: "flex" }}>
                    <h4>Add to favorites</h4>
                    <AddFavorite />
                  </div>
                </div>
              </div>
            </Hide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
