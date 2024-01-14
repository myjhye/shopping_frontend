import axios from "axios"

const AUTH_REST_API_BASE_URL = "http://localhost:8080/api/auth"

// 회원가입
export const signupAPICall = (signupObj) => {
    return axios.post(AUTH_REST_API_BASE_URL + '/register', signupObj);
}

// 로그인
export const loginAPICall = (usernameOrEmail, password) => {
    return axios.post(AUTH_REST_API_BASE_URL + '/login', {usernameOrEmail, password});
}

// 토큰 저장
export const storeToken = (token) => {
    localStorage.setItem("token", token);
}

// 토큰 조회
export const getToken = () => {
    return localStorage.getItem("token");
}