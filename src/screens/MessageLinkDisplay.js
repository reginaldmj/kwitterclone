import React from 'react';
import { MenuContainer, MessageLinkInfo, Loader } from '../components';
import { useSelector } from "react-redux"

export const MessageLinkDisplay = () => {
    const messageLoading = useSelector(state => state.message.messageLoading)

    return (
        <>
            <MenuContainer />
            <MessageLinkInfo />
            { messageLoading && <Loader /> }
        </>
    )
}
