import { connect } from "react-redux";
import { getFav, delFav, filterCards, orderCards } from "../../redux/actions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Options from "../Selectors/Options";
import ReactPaginate from "react-paginate";
import style from "./Favorites.module.css";

function Favorites({ favs, getFav, delFav, filterCards, orderCards }) {
  const [render, setRender] = useState("");

  const [pageNumber, setPageNumber] = useState(0);
  const cardsPerPage = 10;
  const currentTotalCards = pageNumber * cardsPerPage;
  const currentCards = favs.slice(
    currentTotalCards,
    currentTotalCards + cardsPerPage
  );
  const pageCount = Math.ceil(favs.length / cardsPerPage);
  const handlePage = (event) => {
    setPageNumber(event.selected);
  };

  if (pageNumber > pageCount) setPageNumber(0);
  console.log(pageNumber, pageCount);

  useEffect(() => {
    getFav();
  }, [getFav]);

  const handleFavorite = (id) => {
    delFav(id);
  };
  const handleOrder = (event) => {
    let value = event.target.value;
    if (value) {
      orderCards(value);
      setRender(value);
    }
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
      <Options handleGender={handleGender} handleOrder={handleOrder} />
      <div className={style.container}>
        {currentCards.map((fav) => {
          return (
            <div className={style.card} key={fav.id}>
              <Link to={`/detail/${fav.id}`}>
                <h2 className={style.name}>{fav.name}</h2>
              </Link>
              <img className={style.img} src={fav.image} alt={fav.name} />
              <button
                className={style.favb}
                onClick={() => handleFavorite(fav.id)}
              >
                <img className={style.fav} src="lover.png" alt="lover" />
              </button>
            </div>
          );
        })}
      </div>
      <ReactPaginate
        breakeLebel="..."
        previousLabel="<"
        nextLabel=">"
        pageCount={pageCount}
        onPageChange={handlePage}
        containerClassName={style.paginate}
        activeClassName={style.active}
      />
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
    getFav: () => dispatch(getFav()),
    delFav: (obj) => dispatch(delFav(obj)),
    filterCards: (gender) => dispatch(filterCards(gender)),
    orderCards: (order) => dispatch(orderCards(order)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
