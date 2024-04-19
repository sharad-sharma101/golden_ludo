import httpClient from "../httpClient";

export async function fetchBattlesApi(query: string) {
    try {
        const resp = await httpClient.get(`/battles?${query}`, {});
        return 'data' in resp ?  resp.data : resp.message;
    } catch (error) {
        console.error(error);
        return {};
    }
}

export async function fetchBattleById(id: string) {
    try {
        const resp = await httpClient.get(`/battles/${id}`, {});
        return 'data' in resp ?  resp.data : resp.message;
    } catch (error) {
        console.error(error);
        return {};
    }
}

export async function updateBattleApi(id: string, body: any) {
    try {
        const resp = await httpClient.patch(`/battles/${id}`, {} , body);
        return 'data' in resp ?  resp.data : resp.message;
    } catch (error) {
        console.error(error);
        return {};
    }
}

export async function createBattleApi(body: any) {
    try {
        const resp = await httpClient.post(`/battles`, {} , body);
        return 'data' in resp ?  resp.data : resp.message;
    } catch (error) {
        console.error(error);
        return {};
    }
}

export async function checkBattleSessionApi() {
    try {
        const resp = await httpClient.post(`/battles/check-battle-session`, {} , {});
        return 'data' in resp ?  resp.data : resp.message;
    } catch (error) {
        console.error(error);
        return {};
    }
}
