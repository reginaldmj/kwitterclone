import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions as messageActions } from "../../redux/actions/messages"
import { v4 as uuidv4 } from "uuid"
import { TrendingItem } from "../trending-item"



export const Trending = () => {
    const { messageList } = useSelector(state => state.message)
    

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(messageActions.getMessageList())
    }, [])

    const getTrendingChirps = () => {
        let topTenChirps = messageList.sort((a, b) => b.likes.length - a.likes.length).slice(0, 10)
        return topTenChirps
    }


    return (
        <>
            <br />
            <br />
            <h2 style={{color: '#565656', marginLeft: '625px'}}>Trending Chirps</h2>
            <br />
            <ol style={{textAlign: 'center', listStyleType: 'none'}}>
                {getTrendingChirps().map((chirp) => (
                     <TrendingItem key={uuidv4()} chirp={chirp} />
                ))}
            </ol>
        </>
    )
}
{/* <br />
<h2>Trending Chirps</h2>
<br />
<ol>
    {getTrendingChirps().map((chirp) => (
        <li key={uuidv4()}>
            Chirper: <Link to="/user" 
                onClick={() => dispatch(actions.getUserInfo(chirp.username))}>
                {chirp.username}</Link>
            <br/>
            Chirp:<Link to="/message" 
                onClick={() => dispatch(messageActions.getMessageLinkInfo(chirp.id))}>      {chirp.text}</Link>
            <br/>
            Hoots: {chirp.likes.length}
            <br/>
            <br/>
            <br/>
        </li>
    ))}
</ol>
{ loading && <Loader />} */}