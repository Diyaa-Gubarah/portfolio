import axios from 'axios';

// Define the data type for the request body
type RequestData = {
    [key: string]: any;
};

export const getRequest = async (url: string,) => {
    const response = await axios.get(url);
    return response.data
};




export const postRequest = async (url: string, data: RequestData) => {
    const res = await axios.post(url, data);
    return res
};
