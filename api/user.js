import axios from 'axios';
import { apiUrl } from '../config';
import cookie from "js-cookie";

// Refresh user Token
export const refreshAccessToken = () => {
    const config = {
        headers: {
            Authorization: `Bearer ${cookie.get('refreshToken')}`,
        }
    };
    return axios.get(`${apiUrl}/refresh`, config);
}

// user Login 
export const logIn = async (logData) => {
    const logFormData = new FormData();
    for (var key in logData) {
        logFormData.append(key, logData[key]);
    }
    try {
        return await axios.post(`${apiUrl}/login`, logFormData);
    } catch (error) {
        return error?.response;
    }
}

