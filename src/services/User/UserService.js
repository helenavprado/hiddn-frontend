import jwt_decode from 'jwt-decode';

export function setInitialUserData(oAuthToken) {
    let decodedToken = jwt_decode(oAuthToken);
    console.log("Decoded Token - Inside UserService.js file");
    console.log(decodedToken);
}