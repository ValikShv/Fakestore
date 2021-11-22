import { CATALOG_ITEMS, CATEGORY_ITEMS, CURRENT_ITEM } from "../config/actionTypes";

const initialState = {
  catalogItems: null,
  categoryItems: null,
  currentItem: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CATALOG_ITEMS:
      return {...state, catalogItems: action.payload};
    case CATEGORY_ITEMS:
      return {...state, categoryItems: action.payload};
    case CURRENT_ITEM:
      return {...state, currentItem: action.payload};

    default:
      return state;
  }
};
