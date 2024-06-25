import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { actions } from "../../redux/actions/users"
import { Toast } from "react-bootstrap"
import photo from "../../assets/purplebird.png"

export const FollowersItem = ({ user }) => {
  const dispatch = useDispatch()
  
  const handleUserLink = () => {
    dispatch(actions.getUserInfo(user.username))
  }
  console.log(user)

  return (
    <>
    <br />
    <Toast className="messageItem">
          <Toast.Header closeButton={false}>
          <img src={photo} className="rounded mr-2" alt="" style={{width: '40px', height: '40px', marginLeft: '10px'}} />
            <strong
              className="mr-auto spacing"><Link
                style={{ color: '#7d0c92',  marginLeft: '-25px' }}
                to="/user"
                onClick={handleUserLink}>
                {user.displayName}
              </Link></strong>
          </Toast.Header>
          <br />
          <Toast.Body>
            <p className="spacing">
            @{user.username}
          </p>
            <br />
          </Toast.Body>
        </Toast>
    </>
  )
}

{/* <br />
<li><Link 
      to="/user" 
      onClick={handleUserLink}
    > 
    {user.displayName}
    </Link> 
</li>
<p style={{color: '#565656'}}>@{user.username}</p>
<br /> */}