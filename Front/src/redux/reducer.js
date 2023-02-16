import { ADD_FAV, GET_FAV, DEL_FAV, FILTER, ORDER } from "./actions";

const initState = {
  myFavorites: [],
  allChars: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        myFavorites: [...state.myFavorites, payload],
        allChars: [...state.allChars, payload],
      };
    case GET_FAV:
      return {
        myFavorites: payload,
        allChars: payload
      };
    case DEL_FAV:
      return {
        myFavorites: state.myFavorites.filter((char) => {
          return char.id !== payload;
        }),
        allChars: state.allChars.filter((char) => {
          return char.id !== payload;
        }),
      };
    case FILTER:
      if (payload === "All") {
        return {
          ...state,
          myFavorites: [...state.allChars],
        };
      } else {
        return {
          ...state,
          myFavorites: state.allChars.filter(char => char.gender === payload)
        };
      }

    case ORDER:
      if (payload === "upward") {
        return {
          myFavorites: state.myFavorites.sort((a, b) => {
            return a.id - b.id;
          }),
          allChars: state.allChars.sort((a, b) => {
            return a.id - b.id;
          }),
        };
      } else {
        return {
          myFavorites: state.myFavorites.sort((a, b) => {
            return b.id - a.id;
          }),
          allChars: state.allChars.sort((a, b) => {
            return b.id - a.id;
          }),
        };
      }
    default:
      return state;
  }
};

export default reducer;
