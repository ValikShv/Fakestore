import {CATALOG_ITEMS} from '../config/actionTypes';

const initialState = {
  catalogItems: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CATALOG_ITEMS:
      return {...state, catalogItems: action.payload};

    default:
      return state;
  }
};
