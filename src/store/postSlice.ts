import { createSlice } from "@reduxjs/toolkit";

//export interface Post {
//    id: number
//    title: string
//    body: string
//}
//
//export interface PostAction {
//    type: string
//    payload: Post | null
//}

const postSlice = createSlice({
    name: 'post',
    initialState: {
        id: '',
        title: '',
        body: ''
    },
    reducers: {
        update(state, action) {
            return action.payload
        }
    }
})

export const { update } = postSlice.actions
export default postSlice.reducer