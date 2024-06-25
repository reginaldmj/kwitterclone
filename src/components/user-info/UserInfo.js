import React from "react"
import { Card } from "react-bootstrap"
import moment from "moment"
import photo from "../../assets/purplebird.png"

export const UserInfo = ({ user }) => {
    

    return (
        <>
            <br/>
            <h2 className="center">Chirper Info</h2>
            <br/>
            
            <Card style={{ width: '30rem', height: '35rem', margin: '-30px auto', position: 'absolute', bottom: '130px', left: '470px'  }}>
                <Card.Img variant="top" src={photo} src={photo} style={{width: '300px', height: '300px', margin: '0 auto'}} />
                <Card.Body>
                    <br />
                    <Card.Title className="center">{user.displayName}</Card.Title>
                    <Card.Text className="center">@{user.username}</Card.Text>
                    <Card.Text className="center">{ user.about && `About: ${user.about}`}</Card.Text>
                    <Card.Text className="center">Created: {moment(user.createdAt).startOf('minute').fromNow()}</Card.Text>
                    <Card.Text className="center">Updated: {moment(user.createdAt).startOf('minute').fromNow()}</Card.Text>
                </Card.Body>
            </Card>
         

        </>
    )
}


