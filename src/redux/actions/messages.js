import api from "../../utils/api";

export const MESSAGE_REQUEST = "MESSAGE_REQUEST"
export const POST_MESSAGE_SUCCESS = "POST_MESSAGE_SUCCESS"
export const POST_MESSAGE_FAILURE = "POST_MESSAGE_FAILURE"
export const MESSAGE_LIST_SUCCESS = "MESSAGE_LIST_SUCCESS"
export const MESSAGE_LIST_FAILURE = "MESSAGE_LIST_FAILURE"
export const ADD_LIKE = "ADD_LIKE"
export const REMOVE_LIKE_ERROR = 'REMOVE_LIKE_ERRO'
export const REMOVE_LIKE = 'REMOVE_LIKE'
export const ADD_LIKE_ERROR = 'ADD_LIKE_ERROR'

export const messageRequest = () => {
  return {
    type: MESSAGE_REQUEST
  }
}

export const postMessageSuccess = (message) => {
  return {
    type: POST_MESSAGE_SUCCESS,
    payload: message
  }
}

export const postMessageFailure = (error) => {
  return {
    type: POST_MESSAGE_FAILURE,
    payload: error
  }
}
export const messageListSuccess = (messageList) => {
  return {
    type: MESSAGE_LIST_SUCCESS,
    payload: messageList
  }
}
export const messageListFailure = (error) => {
  return {
    type: MESSAGE_LIST_FAILURE,
    payload: error
  }
}

export const addLike = (likeObj) => {
  return {
    type: ADD_LIKE,
    payload: likeObj
  }
}

export const removeLike = (likeId) => {
  return {
    type: REMOVE_LIKE,
    payload: likeId
  }
}

export const addLikeError = (err) => {
  return {
    type: ADD_LIKE_ERROR,
    payload: err
  }
}

export const removeLikeError = (err) => {
  return {
    type: REMOVE_LIKE_ERROR,
    pauload: err
  }
}

export const deleteMessage = (messageId) => async (dispatch, getState) => {
  try {
    await api.deleteMessage(messageId)
    const payload = await api.getMessageList()
    dispatch(messageListSuccess(payload.messages));
  } catch (err) {
    dispatch(addLikeError)
  }
}


export const likeMessage = (messageId) => async (dispatch, getState) => {
  try {
    await api.addLike(messageId)
    const payload = await api.getMessageList()
    dispatch(messageListSuccess(payload.messages));
  } catch (err) {
    dispatch(addLikeError)
  }
}

export const removeLikeFromMessage = (likeId) => async (dispatch, getState) => {
  try {
    await api.removeLike(likeId);
    const payload = await api.getMessageList()
    dispatch(messageListSuccess(payload.messages));
  } catch (err) {
    dispatch(removeLikeError)
  }
}


export const postMessage = (message) => async (dispatch, getState) => {
  try {
    dispatch(messageRequest());
    const payload = await api.addMessage(message)
    dispatch(postMessageSuccess(payload));
    dispatch(getMessageList())
  } catch (err) {
    dispatch(postMessageFailure(err.message));
  }
}

export const getMessageList = () => async (dispatch, getState) => {
  try {
    dispatch(messageRequest());
    const payload = await api.getMessageList()
    dispatch(messageListSuccess(payload.messages));
  } catch (err) {
    dispatch(messageListFailure(err.message));
  }
}

export const getMessageLinkInfo = (messageId) => async (dispatch, getState) => {
  try {
    dispatch(messageRequest());
    const payload = await api.messageLinkInfo(messageId)
    dispatch(postMessageSuccess(payload));
  } catch (err) {
    dispatch(postMessageFailure(err.message));
  }
}

export const actions = {
  postMessage,
  getMessageList,
  likeMessage,
  removeLikeFromMessage,
  getMessageLinkInfo,
  deleteMessage
}