import { GET_PRODUCTS } from "../constants/actionTypes";

const productReducer = (products = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.payload;
    default:
      return products;
  }
};
export default productReducer;
