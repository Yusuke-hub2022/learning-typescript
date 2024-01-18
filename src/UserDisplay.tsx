import React from "react";
import { AppState } from "./store/AppState";
import { useSelector } from "react-redux";
import { User } from "./store/userSlice";

const UserDisplay = () => {
    const user = useSelector((state: AppState) => state ? state.user : null)
    console.log('user', user)

    if (!user) {
        return null
    }
    return (<React.Fragment>
        <div><label>username:</label>&nbsp;{user.username}</div>
        <div><label>email:</label>&nbsp;{user.email}</div>
        <div><label>city:</label>&nbsp;{user.city}</div>
    </React.Fragment>)
};

export default UserDisplay