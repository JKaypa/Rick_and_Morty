import axios from "axios";

export const ADD_FAV = "ADD_FAV";
export const DEL_FAV = "DEL_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const GET_FAV = "GET_FAV";

export const addFav = (char) => {
  return async function (dispatch) {
    let { data } = await axios.post("/fav", char);
    dispatch({ type: ADD_FAV, payload: data });
  };
};

export const getFav = () => {
  return async function (dispatch) {
    let { data } = await axios("/fav");
    dispatch({ type: GET_FAV, payload: data });
  };
};

export const delFav = (id) => {
  return async (dispatch) => {
    dispatch({ type: DEL_FAV, payload: id });
    await axios.delete(`/fav/${id}`);
  };
};
export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};
export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};
