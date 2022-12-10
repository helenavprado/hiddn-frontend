import { createSlice } from "@reduxjs/toolkit";

const newUserSlice = createSlice({
    name: "USER_SLICE",
    initialState: {
        userIdentifier: "",
        userFirstName: "",
        userLastName: "",
        userPicture: "",
        userEmail: "",
        userRoles: {}
    },
    reducers: {
        setUserInitialData: (state, action) => {
            state.userIdentifier = action.payload.userIdentifier;
            state.userFirstName = action.payload.userFirstName;
            state.userLastName = action.payload.userLastName;
            state.userPicture = action.payload.userPicture;
            state.userEmail = action.payload.userEmail;
            state.userRoles = action.payload.userRoles;
        }
    }
});

export default newUserSlice.reducer;
export const { setUserInitialData } = newUserSlice.actions;