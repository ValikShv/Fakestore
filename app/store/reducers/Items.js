import { CATALOG_ITEMS, CATEGORY_ITEMS } from "../config/actionTypes";

const initialState = {
  catalogItems: null,
  categoryItems: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CATALOG_ITEMS:
      return {...state, catalogItems: action.payload};
    case CATEGORY_ITEMS:
      return {...state, categoryItems: action.payload};

    default:
      return state;
  }
};
