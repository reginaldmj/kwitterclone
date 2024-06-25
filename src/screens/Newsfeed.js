import React from "react"
import { AddMessage, MenuContainer, MessageList } from "../components";
import "./style.css"


export const Newsfeed = () => (
    <>
        <MenuContainer />
        <br />
        <AddMessage />
        <br />
        <MessageList />

    </>
)
