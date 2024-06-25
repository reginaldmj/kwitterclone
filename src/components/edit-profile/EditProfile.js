import React, { useState }  from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../redux/actions/users"
import { Modal, Button, Form } from "react-bootstrap"


export const EditProfile = () => {
    const { userInfo, username, userLoading } = useSelector(state => ({
        username: state.auth.username,
        userInfo: state.users.userInfo,
        userLoading: state.users.userLoading
    }))

    const [ state, setState ] = useState({
        username: username,
        password: "",
        about: "",
        displayName: ""
    })

    const [ toggle, setToggle ] = useState(false)

    const [show, setShow] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(actions.editUserProfile(state));
        setToggle(true)
        setShow(true)
        setState((prevState) => ({
            ...prevState, 
            password: "",
            about: "",
            displayName: ""
        }))
    }

    const dispatch = useDispatch()

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
    }

    const handleClose = () => setShow(false)

    return (
        <>
            <Form className="formContainer" onSubmit={handleSubmit}>
            <br />
            <h2 className="title">Edit Profile</h2>
            <br />
            <br />
            <Form.Group controlId="formBasicDisplayName">
                <Form.Label>Display Name</Form.Label>
                <Form.Control
                    type="text"
                    name="displayName"
                    value={state.displayName}
                    placeholder={ userLoading ? null : userInfo.user.displayName}
                    autoFocus
                    required
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="formBasicDisplayName">
                <Form.Label>About</Form.Label>
                <Form.Control
                   type="text"
                   name="about"
                   value={state.about}
                   placeholder={ userLoading ? null : userInfo.user.about}
                   autoFocus
                   required
                   onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                        type="password"
                        name="password"
                        value={state.password}
                        autoFocus
                        required
                        onChange={handleChange}
                    />
            </Form.Group>

            <br />

            <Button variant="flat" type="submit" style={{backgroundColor: '#c89be9', color: 'white'}}>
                Submit
            </Button>
                { toggle && show &&
                    <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Cool!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Your profile has been updated.</Modal.Body>
                    <Modal.Footer>
                      <Button 
                        variant="flat" 
                        style={{backgroundColor: '#c89be9', color: 'white'}}
                        onClick={handleClose}>
                        Close
                      </Button>
                      <Button 
                        variant="flat" 
                        href="/profile"
                        style={{backgroundColor: '#c89be9', color: 'white'}}
                        >
                        Profile
                    </Button>
                    </Modal.Footer>
                  </Modal>
                }
            </Form>
        </>
    )
}

{/* <h2>Edit Profile</h2>
            <br />
            <form onSubmit={handleSubmit}>
                <label htmlFor="password">Password</label>
                <br />
                <input
                    type="password"
                    name="password"
                    value={state.password}
                    autoFocus
                    required
                    onChange={handleChange}
                />
                <br />
                <br />
                <label htmlFor="displayName">Display Name</label>
                <br />
                <input
                    type="text"
                    name="displayName"
                    value={state.displayName}
                    placeholder={ userLoading ? null : userInfo.user.displayName}
                    autoFocus
                    required
                    onChange={handleChange}
                />
                <br />
                <br />
                <label htmlFor="about">About</label>
                <br />
                <input
                    type="text"
                    name="about"
                    value={state.about}
                    placeholder={ userLoading ? null : userInfo.user.about}
                    autoFocus
                    required
                    onChange={handleChange}
                />
                <br />
                <br/>
                <button 
                    type="submit">
                        Submit
                </button>
                <br />
                <br /> */}
                // </form>