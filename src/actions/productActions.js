import data from "../Data.json";
import { GET_PRODUCTS } from "../constants/actionTypes";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
