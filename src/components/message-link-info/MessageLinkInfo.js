import React from "react"
import { useSelector } from "react-redux"
import { Card } from "react-bootstrap"
import moment from "moment"
import photo from "../../assets/purplebird.png"

export const MessageLinkInfo = () => {
    const { message } = useSelector(state => state.message.message)


    return (
        <>
            <br />
            <h2 className="center">Chirp Info</h2>
            <br />
            <Card className="profileCard">
                <Card.Img variant="top" src={photo} src={photo} style={{width: '300px', height: '300px', margin: '0 auto'}} />
                <Card.Body>
                    <Card.Title className="center">Chirper: {message.username}</Card.Title>
                    <Card.Text className="center">Chirp: {message.text}</Card.Text>
                    <Card.Text className="center">Posted: {moment(message.createdAt).startOf('minute').fromNow()}</Card.Text>
                    <Card.Text className="center">Hoots: {message.likes.length}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
