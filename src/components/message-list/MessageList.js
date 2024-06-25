import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../redux/actions/messages"
import { MessageItem } from "../message-item"
import { Loader } from "../loader"


export const MessageList = () => {
  const { messageList } = useSelector(state => {
    return {
      messageList: state.message.messageList
    }
  })

  const messageLoading = useSelector(state => state.message.messageLoading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.getMessageList())
  }, [])

  return (
    <>
      <ul>
        {messageList.map(item => (
          <MessageItem item={item} key={item.id} />
        ))}
      </ul>
      { messageLoading && <Loader /> }
    </>
  )
}
