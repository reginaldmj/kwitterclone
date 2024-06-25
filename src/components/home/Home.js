import React from "react"
import { Jumbotron, Button } from "react-bootstrap"
import logo from "../../assets/purplebird.png"

export const Home = () => {
    return (
        <>
            
                        <img src={logo} style={{width: '65%', position: 'absolute', top: '20px', left: '-120px'}}/>
                            <p style={{fontFamily: 'helvetica', color: 'white', position: 'absolute', top: '180px', right: '130px', fontSize: '60px', textShadow: '1px 1px #565656'}}>Welcome to Chirp!</p>

                            <p style={{fontFamily: 'helvetica', color: 'white', position: 'absolute', top: '290px', right: '125px', fontSize: '30px' }}>Come see what your cohort is saying!</p>
                            <Button variant="flat" style={{position: 'absolute', top: '440px', right: '90px', width: '40%', color: '#ffffff', backgroundColor: '#c89be9'}} href="/sign-up">Sign Up</Button>

                            <Button variant="flat" style={{position: 'absolute', top: '540px', right: '90px', width: '40%', color: '#ffffff', backgroundColor: '#c89be9'}} href="/log-in" >Log In</Button>
                       
                    
            
        </>
    )
}