import { combineReducers } from "@reduxjs/toolkit";
import addItemReducer from "./AddItem/add-item-reducer";
import selectLinkReducer from "./Select-Link/select-link-reducer";

const rootReducer = combineReducers({
  addItem: addItemReducer,
  selectLink: selectLinkReducer,
});
export default rootReducer;
