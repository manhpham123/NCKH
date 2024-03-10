import axios from "axios";
import qs from 'qs'

const request = axios.create({
    baseURL: "http://service4all.vinorsoft.com:18003/api/v1",
    headers: {
        "content-type": "application/json",
    },
    paramsSerializer: (params) => qs.stringify(params),
})

request.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('access_token')}`
request.interceptors.request.use(async (config) => config);


export {request}