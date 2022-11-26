import Keycloak from "keycloak-js";

let initOptions = {
    url: "http://localhost:8080/auth/",
    realm: "hidden-auth-server",
    clientId: "frontend-auth-client",
    onload: "login-required"
}
  
let keycloak = Keycloak(initOptions);

export function keycloakLogin() {
    keycloak.init({ onLoad: initOptions.onload}).success((auth) => {
        if(!auth) {
            window.location.reload();
        } else {
            console.info("Authenticated");
        }
    
        localStorage.setItem("bearer-token", keycloak.token);
        localStorage.setItem("refresh-token", keycloak.refreshToken);
    
        console.log("Checking Token")
        console.log(keycloak.token)
    
        setTimeout(() => {
            keycloak.updateToken(70).success((refreshed) => {
                if(refreshed) {
                    console.debug("Token refreshed" + refreshed)
                } else {
                    console.warn("Token not refreshed, valid for " + 
                        Math.round(keycloak.tokenParsed.exp + 
                        keycloak.timeSkew - new Date().getTime() / 1000) 
                        + " seconds");
                }
            }).error(() => {
                console.error("Failed to refresh token")
            });
        }, 6000);
    }).error(() => {
        console.log("Authentication failed")
    });
}

export function keycloakLogout() {
    keycloak.logout();
}

export function keycloakSignup() {
    console.log("Sign Up User on Keycloak")
}

