import axios from "axios";
import { getToken } from "./AuthService";

const REST_API_BASE_URL = 'http://localhost:8080/api/products';

axios.interceptors.request.use(function (config) {
    config.headers['Authorization'] = getToken();
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 조회
export const listProducts = () => {
    return axios.get(REST_API_BASE_URL);
}

// 등록
export const createProduct = (product) => {
    return axios.post(REST_API_BASE_URL, product);
}

