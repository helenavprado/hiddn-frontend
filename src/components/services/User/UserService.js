import jwt_decode from 'jwt-decode';
import store from '../../../store.js';

import { setUserInitialData } from "../../slices/User/UserSlice.js";

export function setInitialUserData(oAuthToken) {
    let userInitialData = {};
    let decodedToken = jwt_decode(oAuthToken);

    userInitialData["userIdentifier"] = decodedToken["sub"];
    userInitialData["userFirstName"] = decodedToken["given_name"];
    userInitialData["userLastName"] = decodedToken["family_name"];
    userInitialData["userPicture"] = decodedToken["profile_picture"];
    userInitialData["userEmail"] = decodedToken["email"];
    userInitialData["userRoles"] = decodedToken["realm_access"]["roles"];

    store.dispatch(setUserInitialData(userInitialData));
}