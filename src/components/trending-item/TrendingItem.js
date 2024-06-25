import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Loader } from "../loader"
import { Link } from "react-router-dom"
import { actions } from "../../redux/actions/users"
import { actions as messageActions } from "../../redux/actions/messages"
import photo from "../../assets/purplebird.png"
import { Toast } from "react-bootstrap"


export const TrendingItem = ({chirp}) => {
    const loading = useSelector(state => state.message.messageLoading)

    const dispatch = useDispatch()
    
    return (
        <>
        <Toast className="messageItem">
          <Toast.Header closeButton={false}>
            <img src={photo} className="rounded mr-2" alt="" style={{width: '40px', height: '40px', marginLeft: '11px'}} />
            <strong
              className="mr-auto spacing"><Link
                style={{ color: '#7d0c92',  marginLeft: '-25px' }}
                to="/user"
                onClick={() => dispatch(actions.getUserInfo(chirp.username))}>
                {chirp.username}
              </Link></strong>
          </Toast.Header>
          <Toast.Body><Link
            className="spacing"
            style={{color: '#af41c4'}}
            to="/message"
            onClick={() => dispatch(messageActions.getMessageLinkInfo(chirp.id))}>
            {chirp.text}
          </Link>
          <p style={{color: '#565656'}}>Hoots: {chirp.likes.length}</p>
            <br />
          </Toast.Body>
          {loading && <Loader />}
        </Toast>
        <br />
        </>
    )
}
                   
                       
               