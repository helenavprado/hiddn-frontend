import { createSlice } from "@reduxjs/toolkit";

const newRoomSlice = createSlice({
    name: "ROOM_SLICE",
    initialState: {
        chatIdentifier: "",
        chatName: "",
        chatPicture: "",
        chatUsers: []
    }, 
    reducers: {
        setRoomCurrentState: (state, action) => {
            state.chatIdentifier = action.payload.chatIdentifier;
            state.chatName = action.payload.chatName;
            state.chatPicture = action.payload.chatPicture;
            state.chatUsers = action.payload.chatUsers;
        }
    }
});

export default newRoomSlice.reducer;
export const {
    setRoomCurrentState
} = newRoomSlice.actions;