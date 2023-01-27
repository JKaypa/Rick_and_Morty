import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, delFav } from "../redux/actions";
import style from "./Card.module.css";

function Card({ onClose, id, img, name, gender, species }) {

  const [isFav, setIsFav] = useState(false);
  const favs = useSelector((state) => state.myFavorites)
  const dispatch = useDispatch()
  const char = {id, img, name, gender, species}


  useEffect(() => {
    if (favs.find((fav) => fav.id === id)) setIsFav(true);
  }, [favs]);

  const handleFavorite = (char) => {
    if (isFav) {
      setIsFav(false);
      dispatch(delFav(char));
    } else {
      setIsFav(true);
      dispatch(addFav(char));
    }
  };

  return (
    <div className={style.card}>
      {isFav ? (
        <button className={style.fav} onClick={() => handleFavorite(char)}><img className={style.fav} src='favorite-heart-inline-button.png' /></button>
      ) : (
        <button className={style.fav} onClick={() => handleFavorite(char)}><img className={style.fav} src='favorite-heart-outline-button.png' /></button>
      )}
      <button className={style.close} onClick={() => onClose(id)}>
        close
      </button>
        <img className={style.img} src={img} alt={name} />
      <Link to={`/detail/${id}`}>
        <h2 className={style.name}>{name}</h2>
      </Link>
    </div>
  );


};

export default Card;
