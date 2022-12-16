import { setUserInitialData } from "../../slices/User/UserSlice";
import store from "../../../store";

const baseServerUrl = "http://localhost:8081";

export function checkUserExistence(userIdentifier) {
    let userExists = false;
    fetch(`${baseServerUrl}/v1/user/${userIdentifier}`)
        .then(response => response.json())
        .then(responseJson => userExists = responseJson);

    return userExists
}

export function saveUserToBackend(user) {
    fetch(`${baseServerUrl}/v1/user`, { method: "POST", body: JSON.stringify(user), headers: {
        "Content-Type": "application/json"
    }})
        .then(response => response.json())
        .catch(err => console.log(err));
}

export function getUserData(userKeycloakIdentifier) {
    fetch(`${baseServerUrl}/v1/user/keycloak/${userKeycloakIdentifier}`, {method: "GET"})
        .then(response => response.json())
        .then(responseJson => store.dispatch(setUserInitialData({
            keycloakIdentifier: responseJson.userKeycloakIdentifier,
            userIdentifier: responseJson.userIdentifier,
            userFirstName: responseJson.userFirstName,
            userLastName: responseJson.userLastName,
            userPicture: responseJson.userPicture,
            userEmail: responseJson.userEmail
        })))
        .catch(err => console.log(err));
}

export function getUserAllFriends(userIdentifier) {
    let userFriends = [];
    fetch(`${baseServerUrl}/v1/friend/${userIdentifier}`, {method: "GET"})
        .then(response => response.json())
        .then(responseJson => userFriends = responseJson)
        .catch(err => console.log(err));

    return userFriends;
}

export function getUserRooms(userIdentifier) {
    // Fix backend to return chats
    let userRooms = [
        {
            chatIdentifier: "a098ccce-5a31-4810-afb0-e581eec571a7",
            chatName: "Hello World Chat",
            chatPicture: "https://picsum.photos/50"
        },
        {
            chatIdentifier: "a098ccce-5a31-4810-afb0-e581eec571a8",
            chatName: "Hello World Chat 2",
            chatPicture: "https://picsum.photos/50"
        },
        {
            chatIdentifier: "a098ccce-5a31-4810-afb0-e581eec571a9",
            chatName: "Hello World Chat 3",
            chatPicture: "https://picsum.photos/50"
        }
    ];

    fetch(`${baseServerUrl}/v1/chat/${userIdentifier}`, {method: "GET"})
        .then(response => response.json())
        .then(responseJson => console.log(responseJson))
        .catch(err => console.log(err));

    return userRooms;
}

export function getUserFriends(userIdentifier) {
    fetch(`${baseServerUrl}/v1/friend/${userIdentifier}`, {method: "GET"})
        .then(response => response.json())
        .then(responseJson => {
            return responseJson;
        })
        .catch(err => console.log(err));
}

export function getFriendWithEmailLike(userIdentifier, targetEmail) {
    fetch(`${baseServerUrl}/v1/friend/filter/${userIdentifier}?` + new URLSearchParams({ baseEmail: targetEmail }), {method: "GET"})
        .then(response => response.json())
        .then(responseJson => {
            return responseJson[0];
        })
        .catch(err => console.log(err));
}
