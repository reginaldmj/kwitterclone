import React from "react"
import { Link } from "react-router-dom"


export const PageNotFound = () => {

    return (
        <>
            <br />
            <h1>404</h1>
            <br />
            <p>Sorry, we couldn't find that page...</p>
            <br />
            <p>But Chirp is here to help - maybe one of these will point you in the right direction?</p>
            <ul>
                <li><Link to="/profiles/:username">Newsfeed</Link></li>
                <li><Link to="/trending">Trending Chirps</Link></li>
                <li><Link to="/profile">Profile Page</Link></li>
                <li><Link to="/followers">Followers</Link></li>
                <li><Link to="/search">Look Up A User</Link></li>
            </ul>
        </>
    )
}


