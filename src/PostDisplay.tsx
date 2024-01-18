import React, { useRef } from "react";
import { AppState } from "./store/AppState";
import { useSelector } from "react-redux";

const PostDisplay = React.memo(() => {
    const renderCount = useRef(0)
    console.log('renders PostDisplay', renderCount.current++)
    const post = useSelector((state: AppState) => state.post)
    console.log('post', post)

    if(!post) {
        return null
    }
    return (<React.Fragment>
        <div><label>title:</label>&nbsp;{post.title}</div>
        <div><label>body:</label>&nbsp;{post.body}</div>
    </React.Fragment>)
})

export default PostDisplay