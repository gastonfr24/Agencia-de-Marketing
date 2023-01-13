import { combineReducers } from "redux";
import categories from "./categories";
import blog from "./blog";
import alert from "./alert";

export default combineReducers({
categories,
blog,
alert
})
