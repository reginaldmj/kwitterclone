import { 
    MESSAGE_REQUEST, 
    POST_MESSAGE_SUCCESS, 
    POST_MESSAGE_FAILURE, 
    MESSAGE_LIST_SUCCESS, 
    MESSAGE_LIST_FAILURE 
} from "../actions"

const INITIAL_STATE = {
    messageLoading: false,
    message: "",
    messageError: "",
    messageList: []
}

export const messageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MESSAGE_REQUEST:
            return {
                ...state,
                messageLoading: true
            }
        case POST_MESSAGE_SUCCESS:
            return {
                ...state,
                messageLoading: false,
                message: action.payload
            }
        case POST_MESSAGE_FAILURE:
            return {
                ...state,
                messageLoading: false,
                messageError: action.payload
            }
        case MESSAGE_LIST_SUCCESS:
            return {
                ...state,
                messageLoading: false,
                messageList: action.payload
            }
        case MESSAGE_LIST_FAILURE:
            return {
                ...state,
                messageLoading: false,
                messageError: action.payload
            }
        default:
            return state
    }
}