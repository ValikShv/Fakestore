import {TEST} from '../config/actionTypes';

const initialState = {
  test: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return {...state, test: action.payload};

    default:
      return state;
  }
};
