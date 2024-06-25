import api from '../../utils/api';

export const USER_REQUEST = 'USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE'
export const REMOVE_USER_DISPLAY = 'REMOVE_USER_DISPLAY'
export const GET_FOLLOWERS_SUCCESS = 'GET_FOLLOWERS_SUCCESS'
export const GET_FOLLOWERS_FAILURE = 'GET_FOLLOWERS_FAILURE'
export const ADD_PHOTO_SUCCESS = 'ADD_PHOTO_SUCCESS'
export const ADD_PHOTO_FAILURE = 'ADD_PHOTO_FAILURE'

export const userRequest = () => {
    return {
        type: USER_REQUEST
    }
}

export const getUserSuccess = (user) => {
    return {
        type: GET_USER_SUCCESS,
        payload: user
    }
}
export const getUserFailure = (err) => {
    return {
        type: GET_USER_FAILURE,
        payload: err
    }
}

export const deleteUserSuccess = (data) => {
    return {
        type: DELETE_USER_SUCCESS,
        payload: data
    }
}

export const deleteUserFailure = (err) => {
    return {
        type: DELETE_USER_FAILURE,
        payload: err
    }
}

export const getFollowersSuccess = (followers) => {
    return {
        type: GET_FOLLOWERS_SUCCESS,
        payload: followers
    }
}

export const getFollowersFailure = (err) => {
    return {
        type: GET_FOLLOWERS_FAILURE,
        payload: err
    }
}

export const addPhotoSuccess = (pictureLocation) => {
    return {
        type: ADD_PHOTO_SUCCESS,
        payload: pictureLocation
    }
}

export const addPhotoFailure = (err) => {
    return {
        type: ADD_PHOTO_FAILURE,
        payload: err
    }
}


const getUserInfo = (username) => async (dispatch, getState) => {
    try {
        dispatch(userRequest());
        let payload = await api.profile(username);
        if (payload === undefined) {
            payload = []
            throw new SyntaxError("The username does not exist. Please try again.")
        }
        dispatch(getUserSuccess(payload));
    } catch (err) {
        dispatch(getUserFailure(err.message));
    }
};

const deleteUserAccount = (username) => async (dispatch, getState) => {
    try {
        dispatch(userRequest());
        const payload = await api.deleteAccount(username);
        dispatch(deleteUserSuccess(payload));
    } catch (err) {
        dispatch(deleteUserFailure(err.message));
    }
};

const getFollowers = () => async (dispatch, getState) => {
    try {
        dispatch(userRequest());
        const payload = await api.getFollowersList();
        dispatch(getFollowersSuccess(payload));
    } catch (err) {
        dispatch(getFollowersFailure(err.message));
    }
}

const userSignUp = (credentials) => async (dispatch, getState) => { 
    try {
        dispatch(userRequest());
        const payload = await api.signUpRequest(credentials);
        dispatch(getUserSuccess(payload));
    } catch (err) {
        dispatch(getUserFailure(err.message));
    }
}
        
const editUserProfile = (state) => async (dispatch, getState) => {
    try {
        dispatch(userRequest());
        const payload = await api.editProfile(state);
        dispatch(getUserSuccess(payload));
    } catch (err) {
        dispatch(getUserFailure(err.message));
    }
}

const uploadPhoto = (username) => async (dispatch, getState) => {
    try {
        dispatch(userRequest());
        const payload = await api.uploadPhotoRequest(username);
        dispatch(addPhotoSuccess(payload));
    } catch (err) {
        dispatch(addPhotoFailure(err.message));
    }
}

export const actions = { 
    getUserInfo, 
    deleteUserAccount, 
    getFollowers, 
    userSignUp,
    editUserProfile,
    uploadPhoto
 }
