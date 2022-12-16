import { createSlice } from "@reduxjs/toolkit";

const newUserSlice = createSlice({
    name: "USER_SLICE",
    initialState: {
        keycloakIdentifier: "",
        userIdentifier: "",
        userFirstName: "",
        userLastName: "",
        userPicture: "",
        userEmail: "",
        userRooms: [],
        userFriends: []
    },
    reducers: {
        setUserInitialData: (state, action) => {
            state.keycloakIdentifier = action.payload.keycloakIdentifier;
            state.userIdentifier = action.payload.userIdentifier;
            state.userFirstName = action.payload.userFirstName;
            state.userLastName = action.payload.userLastName;
            state.userPicture = action.payload.userPicture;
            state.userEmail = action.payload.userEmail;
        },
        setUserUpdatedPicture: (state, action) => {
            state.userPicture = action;
        },
        setUserIdentifier: (state, action) => {
            state.userIdentifier = action
        },
        setUserRooms: (state, action) => {
            console.log("Dentro do setUserFriends")
            console.log(action)
            state.userRooms = action.payload
        },
        setUserFriends: (state, action) => {
            console.log("Dentro do setUserFriends")
            console.log(action)
            state.userFriends = action.payload
        }
    }
});

export default newUserSlice.reducer;
export const { 
    setUserInitialData, 
    setUserUpdatedPicture, 
    setUserIdentifier,
    setUserRooms,
    setUserFriends
} = newUserSlice.actions;