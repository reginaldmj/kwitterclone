import {
    USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    GET_FOLLOWERS_SUCCESS,
    GET_FOLLOWERS_FAILURE,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    ADD_PHOTO_SUCCESS,
    ADD_PHOTO_FAILURE
} from '../actions';

const INITIAL_STATE = {
    userInfo: [],
    userLoading: false,
    userError: "",
    usersList: [],
    username: "",
    pictureLocation: null
};

export const userReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
        case USER_REQUEST:
            return {
                ...INITIAL_STATE,
                userLoading: true
            };
        case GET_USER_SUCCESS:
            return {
                ...INITIAL_STATE,
                userInfo: action.payload,
                userLoading: false
            };
        case GET_USER_FAILURE:
            return {
                ...INITIAL_STATE,
                userError: action.payload,
                userLoading: false
            };
        case GET_FOLLOWERS_SUCCESS:
            return {
                ...INITIAL_STATE,
                usersList: action.payload
            };
        case GET_FOLLOWERS_FAILURE:
            return {
                ...INITIAL_STATE,
                userError: action.payload
            }
        case DELETE_USER_SUCCESS:
            return {
                ...INITIAL_STATE,
                username: action.payload.username
            };
        case DELETE_USER_FAILURE:
            return {
                ...INITIAL_STATE,
                userError: action.payload
            }
        case ADD_PHOTO_SUCCESS:
            return {
                ...INITIAL_STATE,
                pictureLocation: action.payload.pictureLocation
            };
        case ADD_PHOTO_FAILURE:
                return {
                    ...INITIAL_STATE,
                    userError: action.payload
                }
        default:
            return state;
    }
};
