import axios from "axios";

const baseURL = "http://localhost:8000/";

export const httpGet = async (endpoint) => {
    return axios.get(baseURL + endpoint).then((res) => {
        return res.data;
    })
}

export const httpPost = async (endpoint, data) => {
    return axios.post(baseURL + endpoint, data).then((res) => {
        return res.data;
    })
}