import httpClient from "../httpClient";

export async function fetchWalletApi() {
    try {
        const resp = await httpClient.get('/wallet', {});
        return 'data' in resp ?  resp.data : resp.message;
    } catch (error) {
        console.error(error);
        return {};
    }
}


export async function updateWalletApi(body: any) {
    try {
        const resp = await httpClient.patch('/wallet', {} , body);
        return 'data' in resp ?  resp.data : resp.message;
    } catch (error) {
        console.error(error);
        return {};
    }
}