import React from "react"
import { useSelector } from "react-redux"
import { Card } from "react-bootstrap"
import moment from "moment"
import photo from "../../assets/purplebird.png"
import "./"


export const UserInfoLink = () => {
    const { user } = useSelector(state => state.users.userInfo)


    return (
        <>
            <br/>
            <h2 className="center">Chirper Info</h2>
            <br/>
            { user && 
                <>
                <Card className="profileCard">
                        <Card.Img variant="top" src={photo} style={{width: '300px', height: '300px', margin: '0 auto'}}/>
                        <Card.Body>
                            <Card.Title className="center">Chirper: {user.displayName}</Card.Title>
                            <Card.Text className="center">Username: @{user.username}</Card.Text>
                            <Card.Text className="center">{ user.about && `About: ${user.about}`}</Card.Text>
                            <Card.Text className="center">Created: {moment(user.createdAt).startOf('minute').fromNow()}</Card.Text>
                            <Card.Text className="center">Updated: {moment(user.updatedAt).startOf('minute').fromNow()}</Card.Text>
                        </Card.Body>
                    </Card>
                </>
            }
        </>
    )
}
