import httpClient from "../httpClient";

export async function loginRequest(phoneNumber: string) {
    const body = {
        phoneNumber,
        name: "sharad"
    }
    const resp = await httpClient.post('/auth/register', {} , body);
    return resp;
}


export async function logoutRequest() {
    const resp = await httpClient.post('/auth/logout', {}, {});
    return resp;
}


export async function checkForTokenApi() {
    try {
        const resp = await httpClient.get('/auth/check-user-authentication', {});
        return resp;
    } catch (error) {
        console.error(error);
        return {};
    }
}
