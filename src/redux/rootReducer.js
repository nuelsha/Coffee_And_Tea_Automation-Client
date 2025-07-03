import { combineReducers } from "@reduxjs/toolkit";
import addItemReducer from "./AddItem/add-item-reducer";
import selectLinkReducer from "./Select-Link/select-link-reducer";
import authReducer from "./Auth/auth-reducer";

const rootReducer = combineReducers({
  addItem: addItemReducer,
  selectLink: selectLinkReducer,
  auth: authReducer,
});
export default rootReducer;
