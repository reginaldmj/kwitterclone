import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { LikeButton } from "../like-button"
import { actions } from "../../redux/actions/users"
import { actions as messageActions } from "../../redux/actions/messages"
import { DeleteMessage } from "../delete-message"
import { Toast, Jumbotron } from "react-bootstrap"
import moment from "moment"
import photo from "../../assets/purplebird.png"
import "./MessageItem.css"

export const MessageItem = ({ item }) => {

  const [messageId, setMessageId] = useState({
    messageId: item.id
  })

  const dispatch = useDispatch()

  const handleUserLink = () => {
    dispatch(actions.getUserInfo(item.username))
  }

  const handleMessageLink = () => {
    dispatch(messageActions.getMessageLinkInfo(item.id))
  }


  return (
    <>
      <Jumbotron className="messageListBox">
        <Toast className="messageItem">
          <Toast.Header closeButton={false}>
            <img src={photo} className="rounded mr-2" alt="" style={{width: '40px', height: '40px', marginLeft: '11px'}} />
            <strong
              className="mr-auto spacing"><Link
                style={{ color: '#7d0c92',  marginLeft: '-25px' }}
                to="/user"
                onClick={handleUserLink}>
                {item.username}
              </Link></strong>
            <small className="date">{moment(item.createdAt).startOf('minute').fromNow()}</small>
          </Toast.Header>
          <Toast.Body><Link
            className="spacing"
            to="/message"
            onClick={handleMessageLink}>
            {item.text}
          </Link>
            <br />
            <LikeButton messageId={messageId} message={{ message: item }} />
            <DeleteMessage message={{ message: item }} />
          </Toast.Body>
        </Toast>
      </Jumbotron>
    </>
  )
}

// #af41c4
// #a910c6

{/* <br />
<li><Link 
      to="/user" 
      onClick={handleUserLink}>
      {item.username}
    </Link> posted on {item.createdAt}
</li>
<p><Link 
      to="/message" 
      onClick={handleMessageLink}>
      {item.text}
    </Link>
</p>
<LikeButton messageId={messageId} message={{message:item}}/>
<DeleteMessage message={{message:item}}/>
<br />
<br /> */}
