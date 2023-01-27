import { connect } from "react-redux";
import { delFav } from "../redux/actions";

function Favorites({ favs, delFav }) {

  const handleFavorite = (fav) => {
    delFav(fav);
  };

  console.log(favs);
  return (
    <div>
      {favs.map((fav) => {
        return (
          <div>
            <button onClick={() => handleFavorite(fav)}>❤️</button>
            <img src={fav.img} alt={fav.name} />
            <h2>{fav.name}</h2>
          </div>
        );
      })}
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
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
