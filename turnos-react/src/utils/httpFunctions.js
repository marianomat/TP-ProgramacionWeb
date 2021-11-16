import axios from "axios";

// DESCOMENTAR SEGUN LA URL DEL BACK
//const baseURL = "http://localhost:8000/";
const baseURL = "http://127.0.0.1:8000/";

export const httpGet = async (endpoint) => {
    return axios.get(baseURL + endpoint,{
        headers: {
            authorization:  "Bearer " + localStorage.getItem('token')
        }
    }).then((res) => {
        return res.data;
    })
}

export const httpPost = async (endpoint, data) => {
    return axios.post(baseURL + endpoint, data,{
        headers: {
          authorization:  "Bearer " + localStorage.getItem('token')
        }
      } )
}

export const httpDelete = async (endpoint) => {
    return axios.delete(baseURL + endpoint,{
        headers: {
            authorization:  "Bearer " + localStorage.getItem('token')
        }
    }).then((res) => {
        return res.data;
    })
}

export const httpPut = async (endpoint, data) => {
    return axios.put(baseURL + endpoint, data,{
        headers: {
            authorization:  "Bearer " + localStorage.getItem('token')
        }
    }).then((res) => {
        return res.data;
    })
}

export const httpPatch = async (endpoint, data) => {
    return axios.patch(baseURL + endpoint, data,{
        headers: {
            authorization:  "Bearer " + localStorage.getItem('token')
        }
    }).then((res) => {
        return res.data;
    })
}