import { connect } from "react-redux";
import { delFav, filterCards, orderCards } from "../redux/actions";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Favorites.module.css";

function Favorites({ favs, delFav, filterCards, orderCards }) {
  const [_render, setRender] = useState("");

  const handleFavorite = (id) => {
    delFav(id);
  };
  console.log(favs);
  const handleOrder = (event) => {
    let value = event.target.value;
    if (value) {
      orderCards(value);
      setRender(value);
    }
    console.log(value);
  };

  const handleGender = (event) => {
    let value = event.target.value;
    if (value) {
      filterCards(value);
      setRender(value);
    }
  };

  return (
    <div>
      <div className={style.selections}>
        <select className={style.order} onChange={handleOrder}>
          <option value="">Order by</option>
          <option value="upward">Upward</option>
          <option value="downward">Downward</option>
        </select>
        <select className={style.filter} onChange={handleGender}>
          <option value="">Filter by</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
          <option value="All">All</option>
        </select>
      </div>
      <div className={style.container}>
        {favs.map((fav) => {
          return (
            <div className={style.card} key={fav.id}>
              <Link to={`/detail/${fav.id}`}>
                <h2 className={style.name}>{fav.name}</h2>
              </Link>
              <img className={style.img} src={fav.img} alt={fav.name} />
              <button
                className={style.favb}
                onClick={() => handleFavorite(fav.id)}>
                <img className={style.fav} src="lover.png" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    favs: state.myFavorites,
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    delFav: (obj) => dispatch(delFav(obj)),
    filterCards: (gender) => dispatch(filterCards(gender)),
    orderCards: (order) => dispatch(orderCards(order)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
