import httpClient from "../httpClient";

export async function fetchUserApi() {
    try {
        const resp = await httpClient.get('/user', {});
        return 'data' in resp ?  resp.data : resp.message;
    } catch (error) {
        console.error(error);
        return {};
    }
}

export async function updateUserApi(body: any) {
    try {
        const resp = await httpClient.patch('/user', {} , body);
        return 'data' in resp ?  resp.data : resp.message;
    } catch (error) {
        console.error(error);
        return {};
    }
}

export async function deleteUserApi() {
    try {
        const resp = await httpClient.deleteRequest('/user', {} );
        return 'data' in resp ?  resp.data : resp.message;
    } catch (error) {
        console.error(error);
        return {};
    }
}
