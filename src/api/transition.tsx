import httpClient from "../httpClient";

export async function fetchTransitionApi() {
    try {
        const resp = await httpClient.get('/transactions', {});
        return 'data' in resp ?  resp.data : resp.message;
    } catch (error) {
        console.error(error);
        return {};
    }
}
