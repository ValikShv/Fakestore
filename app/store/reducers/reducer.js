import { combineReducers } from 'redux'

import auth from "./Auth";
import items from "./Items";


export const reducers = combineReducers({ auth, items })
