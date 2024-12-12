import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const middleWares = [];
// if (process.env.REACT_APP_NODE_ENV === "development") {
//   middleWares.push(logger);
// }
middleWares.push(logger);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(...middleWares);
  },
});

export default store;
