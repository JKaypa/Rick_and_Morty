import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, delFav } from "../../redux/actions";
import style from "./Card.module.css";

function Card({ onClose, id, image, name, gender }) {
  const [isFav, setIsFav] = useState(false);
  const favs = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const char = { id, name, gender, image };
  
  const findFavs = () => {
    let finded = favs.some(fav => fav.image === image);
    return finded;
  };
  
  useEffect(() => {
    findFavs() && setIsFav(true)
  }, [isFav]);

  const handleFavorite = (char) => {
    if (isFav) {
      setIsFav(false);
      dispatch(delFav(id));
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
      <img className={style.img} src={image} alt={name} />
      <button className={style.close} onClick={() => onClose(id)}>
        X
      </button>
      {isFav ? (
        <button className={style.favb} onClick={() => handleFavorite(char)}>
          <img className={style.fav} src="lover.png" alt='lover'/>
        </button>
      ) : (
        <button className={style.favb} onClick={() => handleFavorite(char)}>
          <img className={style.fav} src="love.png" alt='love'/>
        </button>
      )}
    </div>
  );
}

export default Card;
