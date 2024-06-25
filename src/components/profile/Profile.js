import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../redux/actions/users"
import { Loader } from "../loader"
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import profilePhoto from "../../assets/purplebird.png"
import moment from "moment"
import "./Profile.css"


export const Profile = () => {
    const { userInfo, username, userLoading } = useSelector(state => ({
        username: state.auth.username,
        userInfo: state.users.userInfo,
        userLoading: state.users.userLoading
    }))

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getUserInfo(username))
    }, [])


    return (
        <>
            <br />
            <h2 className="profile">Profile</h2>
            <br />
            {
                userInfo.user &&
                <>
                    <Card className="profileCard">
                        <Card.Img variant="top" src={profilePhoto} style={{ width: '300px', height: '300px', marginLeft: '60px' }} />
                        <Card.Body>
                            <Card.Title className="center">Chirper: {userInfo.user.displayName}</Card.Title>
                            <Card.Text className="center">Username: @{username}</Card.Text>
                            <Card.Text className="center">{userInfo.user.about && `About: ${userInfo.user.about}`}</Card.Text>
                            <Card.Text className="center">Created: {moment(userInfo.user.createdAt).startOf('minute').fromNow()}</Card.Text>
                            <Card.Text className="center">Updated: {moment(userInfo.user.updatedAt).startOf('minute').fromNow()}</Card.Text>
                            <Button variant="flat" href="/edit-profile" style={{ backgroundColor: '#c89be9', color: 'white', position: 'relative', left: '145px' }}>Edit Profile</Button>
                        </Card.Body>
                    </Card>
                </>
            }
            <br />

            { userLoading && <Loader />}
        </>
    )
}
