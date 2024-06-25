import React from "react"
import { useSelector } from "react-redux"
import { MenuContainer, UserInfoLink, Loader } from "../components"


export const UserLinkDisplay = () => {
    const userLoading = useSelector(state => state.users.userLoading)

    return (
        <>
            <MenuContainer />
            <UserInfoLink />
            { userLoading && <Loader /> }
        </>
    )
}