import React, { useState } from "react";
import "./addFavorite.css";
const AddFavorite = () => {
  const [like, setLike] = useState(false);

  const handleClick = () => setLike(!like);

  return (
    <>
      <button
        className={`like-button ${like ? "liked" : ""}`}
        onClick={handleClick}
      ></button>
    </>
  );
};

export default AddFavorite;
