import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../redux/actions/users"
import { FollowersItem } from "../followers-item"
import { v4 } from "uuid"
import { Loader } from "../loader"


export const Followers = () => {
  const { data, userLoading } = useSelector((state) => ({
    data: state.users.usersList.users,
    userLoading: state.users.userLoading
  }))

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getFollowers());
  }, [])


  return (
    <>
      <br />
      <h2 style={{color: '#565656', marginLeft: '670px' }}>Followers</h2>
      <ul style={{textAlign: 'center', listStyleType: 'none'}}>
        {data && data.map((item) => 
          <FollowersItem 
            user={item} 
            key={v4()}
          />
        )}
      </ul>
      { userLoading && <Loader /> }
    </>
  )
}
