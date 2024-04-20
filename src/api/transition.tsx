import httpClient from "../httpClient";

export async function fetchTransitionApi(query: string) {
    try {
        const resp = await httpClient.get(`/transactions?${query}`, {});
        return 'data' in resp ?  resp.data : resp.message;
    } catch (error) {
        console.error(error);
        return {};
    }
}
