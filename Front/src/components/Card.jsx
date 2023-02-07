import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, delFav } from "../redux/actions";
import style from "./Card.module.css";

function Card({ onClose, id, img, name, gender, species }) {
  const [isFav, setIsFav] = useState(false);
  const favs = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const char = { id, img, name, gender, species };

  useEffect(() => {
    if (favs.find((fav) => fav.id === id)) setIsFav(true);
  }, [favs]);

  const handleFavorite = (char) => {
    if (isFav) {
      setIsFav(false);
      dispatch(delFav(char.id));
    } else {
      setIsFav(true);
      dispatch(addFav(char));
    }
  };

  return (
    <div className={style.card}>

      <Link to={`/detail/${id}`}>
        <h2 className={style.name}>{name}</h2>
      </Link>
      <img className={style.img} src={img} alt={name} />
        <button className={style.close} onClick={() => onClose(id)}>
          X
        </button>
      {isFav ? (
        <button className={style.favb} onClick={() => handleFavorite(char)}>
          <img className={style.fav} src="lover.png" />
        </button>
      ) : (
        <button className={style.favb} onClick={() => handleFavorite(char)}>
          <img className={style.fav} src="love.png" />
        </button>
      )}
    </div>
  );
}

export default Card;
