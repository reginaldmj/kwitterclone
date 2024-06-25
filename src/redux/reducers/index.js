import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { userReducer } from "./users";
import { messageReducer } from "./messages";
import { likesReducer } from "./likes";

export default combineReducers({
    auth: authReducer,
    users: userReducer,
    message: messageReducer,
    likes: likesReducer
});

