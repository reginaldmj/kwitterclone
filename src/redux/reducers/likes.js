import {
    ADD_LIKE,
    ADD_LIKE_ERROR,
    REMOVE_LIKE,
    REMOVE_LIKE_ERROR
} from '../actions';


const INITIAL_STATE = {
    statusCode: 0,
    error: "",
}

export const likesReducer = (state = { INITIAL_STATE }, action) => {
    switch (action.type) {
        case ADD_LIKE:
            const { statusCode, like } = action.payload
            return {
                ...state,
            };
        case REMOVE_LIKE:
            return {
                ...state
            };
        case ADD_LIKE_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case REMOVE_LIKE_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;

    }
}