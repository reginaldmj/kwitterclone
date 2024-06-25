import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../redux/actions/auth"
import { Loader } from "../loader"
import { Link } from "react-router-dom"
import { Form, Button } from "react-bootstrap"

export const LoginForm = () => {
  const { loading, error } = useSelector((state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
  }));

  const dispatch = useDispatch()

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(actions.login(state))
  };

  const handleChange = (event) => {
    const inputName = event.target.name
    const inputValue = event.target.value
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }))
  }

  return (
    <>
    <Form className="formContainer" onSubmit={handleLogin}>
            <br />
            <h2 className="title">Log in to Chirp</h2>
            <br />
            <br />
            <Form.Group controlId="formBasicEmail">
                    <Form.Label style={{color: '#565656'}}>Username</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        value={state.username}
                        autoFocus
                        required
                        style={{color: '#565656'}}
                        onChange={handleChange}
                    />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label style={{color: '#565656'}}>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    value={state.password}
                    autoFocus
                    required
                    style={{color: '#565656', }}
                    onChange={handleChange}
                />
            </Form.Group>
            <br />
            <Button variant="flat" type="submit" style={{backgroundColor: '#c89be9', color: 'white'}} disabled={loading}>
                Log In
            </Button>
            <br />
            <br />
            <Link to="/sign-up" style={{color: '#af41c4'}}>Sign up for Chirp</Link>
            {loading && <Loader />}
            {error && <p style={{ color: "red" }}>{error.message}</p>}
        </Form>
    </>
  )
}

    // <React.Fragment>
    //   <form id="login-form" onSubmit={handleLogin}>
    //     <label htmlFor="username">Username</label>
    //     <input
    //       type="text"
    //       name="username"
    //       value={state.username}
    //       autoFocus
    //       required
    //       onChange={handleChange}
    //     />
    //     <label htmlFor="password">Password</label>
    //     <input
    //       type="password"
    //       name="password"
    //       value={state.password}
    //       required
    //       onChange={handleChange}
    //     />
    //     <br />
    //     <button type="submit" disabled={loading}>
    //       Login
    //     </button>
    //   </form>
    //   {loading && <Loader />}
    //   {error && <p style={{ color: "red" }}>{error.message}</p>}
    // </React.Fragment>