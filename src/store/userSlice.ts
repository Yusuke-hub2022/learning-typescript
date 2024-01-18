import { createSlice } from "@reduxjs/toolkit";

export interface User {
    id: string;
    username: string;
    email: string;
    city: string;
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: '',
        username: '',
        email: '',
        city: ''
    },
    reducers: {
        update(state, action) {
            return action.payload
        },
    }
});

export const { update } = userSlice.actions
export default userSlice.reducer