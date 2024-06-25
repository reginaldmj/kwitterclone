import React from "react"
import { Link } from "react-router-dom"

export const DeletedUser = () => {
    return (
        <>
            <br />
            <br />
            <p style={{fontFamily: 'helvetica', color: 'white', textAlign: 'center', fontSize: '30px', marginTop: '40px' }}>We're sorry to see you go!</p>
            <p style={{fontFamily: 'helvetica', color: 'white', textAlign: 'center', fontSize: '30px', marginTop: '40px' }}>So long, farewell, auf Wiedersehen, goodbye!</p>
            <p style={{fontFamily: 'helvetica', color: 'white', textAlign: 'center', fontSize: '30px', marginTop: '40px' }}>If you changed your mind, you can click the link below to sign up again.</p>
            <Link to="/sign-up" style={{color: '#af41c4', fontSize: '25px', position: 'absolute', top: '400px', marginLeft: '680px'}}>Sign Up</Link>
        </>
    )
}