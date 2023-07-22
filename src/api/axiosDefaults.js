import axios from "axios";

axios.defaults.baseURL = 'https://test-taskmanager-api-c8a395f1942c.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = axios.create();
