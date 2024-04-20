import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://golden-ludo-backend.onrender.com/api/v1/', // Your API base URL
	withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  
const get = async (url: string, headers: any) => {
	if (!url) return { message: "url missing!" }

	if (!headers) headers = {}

	return await apiClient
		.get(url, {
			headers: {
				...headers,
			},
		})
		.then((res: any) => ({
			status: res.status,
			success: true,
			data: res.data,
			message: res.message,
			error: res?.errors,
		}))
		.catch((error: any) => ({
			status: error.status,
			success: false,
			data: [],
			message: error.message,
			error: error,
		}))
}

const patch = async (url: string, headers: any, body?: any) => {
	if (!url) return { message: "url missing!" }

	if (!body) body = {}

	//additional header for get request and other in process
	if (!headers) headers = {}

	return apiClient
		.patch(url, body, {
			headers: {
				...headers,
			},
		})
		.then((res: any) => ({
			status: res.status,
			success: true,
			data: res.data,
			message: res.message,
			error: res?.errors,
		}))
		.catch((error: any) => ({
			status: error.status,
			success: false,
			data: [],
			message: error.message,
			error: error,
		}))
}

const put = async (url: string, headers: any, body: any) => {
	if (!url) return { message: "url missing!" }

	if (!body) body = {}

	//additional header for get request and other in process
	if (!headers) headers = {}

	return apiClient
		.put(url, body, {
			headers: {
				...headers,
			},
		})
		.then((res: any) => ({ success: true, data: res.data }))
		.catch((error: any) => ({ success: false, error: error }))
}


const post = async (url: string, headers: any, body: any) => {
	if (!url) return { message: "url missing!" }

	if (!body) body = {}

	//additional header for get request and other in process
	if (!headers) headers = {}
	return await apiClient
		.post(url, body, {
			headers: {
				...headers,
			},
		})
		.then((res: any) => ({
			status: res.status,
			success: true,
			data: res.data,
			message: res.message,
			error: res?.errors,
		}))
		.catch((error: any) => ({
			status: error.status,
			success: false,
			data: [],
			message: error.message,
			error: error,
		}))
}

const deleteRequest = async (url: string, headers: any) => {
	if (!url) return { message: "url missing!" }

	// if (!body) body = {}

	//additional header for get request and other in process

	if (!headers) headers = {}
	return await apiClient
		.delete(url, {
			headers: {
				...headers,
			},
		})
		.then((res: any) => ({
			status: res.status,
			success: true,
			data: res.data,
			message: res.message,
			error: res?.errors,
		}))
		.catch((error: any) => ({
			status: error.status,
			success: false,
			data: [],
			message: error.message,
			error: error,
		}))
}

export default { get, patch, post, put,deleteRequest }
