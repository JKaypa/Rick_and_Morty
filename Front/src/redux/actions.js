export const ADD_FAV = "ADD_FAV";
export const DEL_FAV = "DEL_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addFav = (char) => {
  return { type: ADD_FAV, payload: char };
};
export const delFav = (char) => {
  return { type: DEL_FAV, payload: char };
};
export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};
export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};
