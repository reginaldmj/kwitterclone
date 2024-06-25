import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions as likeActions } from "../../redux/actions/messages"
import { Button } from "react-bootstrap"


export const LikeButton = ({ messageId, message }) => {
    const user = useSelector(state => state.auth.username)

    const [isLiked, setIsLiked] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        let userLiked = false
        message.message.likes.map((like) => {
            if (like.username === user) {
                setIsLiked(true)
                userLiked = true
            }
        })
        if (userLiked === false) {
            setIsLiked(false)
        }
    })

    const handleLike = () => {
        let userFound = false
        message.message.likes.map((like) => {
            if (like.username === user) {
                dispatch(likeActions.removeLikeFromMessage(like.id))
                userFound = true
            }
        })
        if (userFound === false) {
            dispatch(likeActions.likeMessage(message.message.id))
        }
    }

    const messageIsLiked = isLiked

    return (
        <>
            <p style={{ color: '#565656', marginLeft: '20px' }}>Hoots: {message.message.likes.length}</p>
            <br />
            { messageIsLiked
                ? <Button variant="flat" style={{ marginTop: '-3px', marginLeft: '20px', backgroundColor: '#d64cf0', color: 'white' }} onClick={handleLike}>Peck</Button>
                : <Button variant="flat" style={{ marginTop: '-3px', marginLeft: '20px', backgroundColor: '#ff7825', color: 'white' }} onClick={handleLike}>Hoot</Button>
            }
        </>
    )
}