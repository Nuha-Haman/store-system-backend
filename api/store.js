import axios from 'axios';
import cookie from "js-cookie";
import { apiUrl } from '../config';
import { refreshAccessToken } from './user';


// function to check if location has been used 
const checkExistLocation = async (code, number) => {
    try {
        let res = await axios.get(`${apiUrl}/check_market_location?postcode=${code}&building_number=${number}`)
        return res.data
    } catch (error) {
        if (error.response.status === 401) {

        }
        else return error?.response;
    }
}

// function to get loacation information
export const checkAddress = async (code, number) => {
    const address = `${code}+${number}`;
    try {
    const {is_exist} = await checkExistLocation(code,number);
   
    if(is_exist === true)
        return {is_exist:true};

    else{
        let res = await axios.get(`${apiUrl}/location_info/${address}`)
        return res.data
    }  
    } catch (error) {
        return error?.response;
    }
}

// function to store market into database
export const addStore = async (storeData) => {
    try {
        const form_data = new FormData();
        for (var key in storeData) {
            form_data.append(key, storeData[key]);
        }
        const res = await axios.post(`${apiUrl}/markets`, form_data)
        return res
    } catch (error) {
        return error?.response;
    }
};

// get all stores with filter and pagination 
export const filterStores  = async (term, page, perPage) =>{
    const config = {
        headers: {
          'Authorization': `Bearer ${cookie.get('accessToken')}`,
          'Content-Type': "application/x-www-form-urlencoded" 
        },
    }
    try {
        return axios.get(`${apiUrl}/markets/search?term=${term}&page=${page}&per_page=${perPage}`, config);
    } catch (error) {
        if (error.status === 401) {
            await refreshAccessToken();
        }
        else return error?.response;
    }
   
}