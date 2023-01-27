import { ADD_FAV, DEL_FAV, FILTER, ORDER } from "./actions";

const initState = {
  myFavorites: [],
  allChars: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        myFavorites: [...state.myFavorites, payload],
        allChars: [...state.myFavorites],
      };
    case DEL_FAV:
      return {
        myFavorites: state.myFavorites.filter((char) => {
          return char.id !== payload.id;
        }),
        allChars: [...state.myFavorites]
      };
    case FILTER:
      return {
        myFavorites: [...state.myFavorites].filter(fav => {
          return 
        })
      };
    default:
      return state;
  }
};

export default reducer;
