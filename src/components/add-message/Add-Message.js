import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../redux/actions/messages"
import { Loader } from "../loader"
import { Form, Jumbotron, Button } from "react-bootstrap"
import photo from "../../assets/purplebird.png"
import "./AddMessage.css"

export const AddMessage = () => {
    const messageLoading = useSelector(state => state.message.messageLoading)

    const [text, setText] = useState("")

    const dispatch = useDispatch()

    const handleChange = (e) => setText(e.target.value)

    const handleAddMessage = (event) => {
        event.preventDefault()
        dispatch(actions.postMessage(text))
        setText("")
    }


    return (
        <>
            <Jumbotron className="messageBox">
                <Form onSubmit={handleAddMessage}>
                    <Form.Group controlId="formBasicEmail">
                    <img src={photo} className="rounded mr-2" alt="" style={{width: '60px', height: '60px', marginLeft: '-8px'}} />
                        <Form.Label style={{color: '#565656'}}>What do you want to chirp today?</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control 
                            type="text" 
                            size="lg"
                            value={text} 
                            style={{color: '#565656'}}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    
                    <Button 
                        variant="flat" 
                        type="submit"
                        style={{backgroundColor: '#ff803d', color: 'white', marginTop: '20px'}}>
                        Post Chirp
                    </Button>
                    { messageLoading && <Loader /> } 
                </Form>
            </Jumbotron>
        </>
    )
}
                    {/* // <form onSubmit={handleAddMessage}>
                    //     <p>What do you want to chirp today?</p>
                    //     <input  */}
                    {/* //         type="text" 
                    //         value={text} 
                    //         onChange={handleChange}>
                    //     </input> */}
                        {/* <br />
                        <br />
                     <button  */}
                    {/* //         type="submit">
                    //             Post Chirp
                    //     </button> */}
                    {/* // </form> */}
                    {/* // { messageLoading && <Loader /> } */}