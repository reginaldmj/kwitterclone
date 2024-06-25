import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { actions } from "../../redux/actions/users"
import { Link } from "react-router-dom"
import { Form, Button, Modal } from "react-bootstrap"
import "./SignUp.css"

export const SignUp = () => {
    const [state, setState] = useState({ // will be updating the state throughout to tackle user sign-up
        username: "",
        displayName: "",
        password: "",
        // picture: null
    })

    const [ show, setShow ] = useState(false)
    const [ toggle, setToggle ] = useState(false)
    
    const dispatch = useDispatch()

    const handleSubmit = (event) => { 
        event.preventDefault()
        dispatch(actions.userSignUp(state))
        // dispatch(actions.uploadPhoto(state))
        setToggle(true)
        setShow(true)
        setState({
            username: "",
            displayName: "",
            password: "",
            // picture: null
        })
    }
    
    const handleChange = (event) => {
        const inputName = event.target.name
        const inputValue = event.target.value
        setState((prevState) => ({ ...prevState, [inputName]: inputValue }))
    }

    // const handleSelectPhoto = (event) => {
    //     setState(prevState => ({ 
    //         ...prevState, 
    //         picture: event.target.files[0]
    //     }))
    // }
    
    const handleClose = () => setShow(false);

    return ( // styling from bootstrap(react-bootstrap)

        <Form className="formContainer" onSubmit={handleSubmit}> 
            <br />
            <h2 className="title">Sign Up</h2> {/*sign up title */}
            <br />
            <br />
            <Form.Group controlId="formBasicEmail">
                <Form.Label style={{color: '#565656'}}>Username</Form.Label> {/* username form*/} 
                <Form.Control
                        type="text"
                        placeholder="Choose username"
                        name="username"
                        value={state.username}
                        autoFocus
                        required
                        style={{color: '#565656' }}
                        onChange={handleChange}
                    />
    
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label style={{color: '#565656'}}>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Choose password"
                    name="password"
                    value={state.password}
                    autoFocus
                    required
                    style={{color: '#565656'}}
                    onChange={handleChange}
                />
            
            </Form.Group>

            <Form.Group controlId="formBasicDisplayName">
                <Form.Label style={{color: '#565656'}}>Display Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Choose display name"
                    name="displayName"
                    value={state.displayName}
                    autoFocus
                    required
                    style={{color: '#565656'}}
                    onChange={handleChange}
                />
            </Form.Group>

            {/* <Form.Group controlId="formBasicPhoto">
                <Form.Label>Add Photo</Form.Label>
                <Form.Control
                    type="file"
                    name="photo"
                    value={state.photo}
                    onChange={handleSelectPhoto}
                />
            </Form.Group> */}

            <br />
            
            {/* // submit button */}
            <Button variant="flat" type="submit"  style={{backgroundColor: '#c89be9', color: 'white'}}>
                Submit
            </Button>

            <br />
            <br />
            <p style={{color: '#565656'}}>Already registered?</p>
            <p style={{color: '#565656'}}>Log in <Link to="/log-in" style={{color: '#af41c4'}}>here</Link>.</p>
            { toggle && show &&
                <>
                    <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title style={{color: '#565656'}}>Thank you for signing up!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{color: '#565656'}}>Please click the log in button to post your first chirp!</Modal.Body>
                    <Modal.Footer>
                    <Button 
                        variant="flat" 
                        style={{backgroundColor: '#c89be9', color: 'white'}}
                        onClick={handleClose}>
                        Close
                    </Button>
                    <Button 
                        variant="flat"
                        style={{backgroundColor: '#c89be9', color: 'white'}}
                        href="/log-in">
                        Log In
                    </Button>
                    </Modal.Footer>
                    </Modal>
                </>
            }
        </Form>
    )
}

        {/* <>
             <br />
             <h2>Sign Up</h2>
             <br />
             <form onSubmit={handleSubmit}>
                 <label htmlFor="username">Username</label>
                 <br />
                <input */}
        {/* //             type="text"
        //             name="username"
        //             value={state.username}
        //             autoFocus
        //             required
        //             onChange={handleChange}
        //         />
        //         <br />
        //         <br />
        //         <label htmlFor="password">Password</label>
        //         <br />
        //         <input */}
        {/* //             type="password"
        //             name="password"
        //             value={state.password}
        //             autoFocus
        //             required    
        //             onChange={handleChange}
        //         />
        //         <br />
        //         <br />
        //         <label htmlFor="displayName">Display Name</label>
        //         <br />
        //         <input */}
        {/* //             type="text"
        //             name="displayName"
        //             value={state.displayName}
        //             autoFocus
        //             required
        //             onChange={handleChange} */}
        {/* //         />
        //         <br />
        //         <br />
        //         <button type="submit">Submit</button>
        //     </form> */}
        {/* //     <br />
        //     <p>Already registered?</p>
        //     <p>Log in <Link to="/">here</Link>.</p>
        //     { toggle &&  */}
        {/* //         <>
        //             <p>Thank you for signing up!</p>
        //             <p>Please click <Link to="/">here</Link> to log in and post your first chirp!</p>
        //         </>
        //     }   
        // </> */}