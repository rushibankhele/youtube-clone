import { OFFSET_LIVE_CHAT } from "../Constants/constants";

const { createSlice } = require("@reduxjs/toolkit");

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messege: []
    },
    reducers: {
        addMessage: (state, action) =>{
            state.messege.splice(OFFSET_LIVE_CHAT, 1)
            state.messege.push(action.payload)
        }
    }
})

export const { addMessage } = chatSlice.actions

export default chatSlice.reducer