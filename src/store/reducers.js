import { combineReducers } from "redux";
import homeReducer from "./home/homeReducer";
import pageReducer from "./page/pageReducer";
import userReducer from "./user/userReducer";

export default combineReducers({
  home: homeReducer,
  page: pageReducer,
  user: userReducer,
});
