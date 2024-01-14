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

// 로그아웃
export const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
}

// 토큰 저장
export const storeToken = (token) => {
    localStorage.setItem("token", token);
}

// 토큰 조회
export const getToken = () => {
    return localStorage.getItem("token");
}

// 세션 스토리지에 로그인한 유저 이름 저장
export const saveLoggedInUser = (username) => {
    sessionStorage.setItem("authenticatedUser", username);
}

// 세션 스토리지에서 로그인한 유저 이름을 조회해 로그인 여부 확인
export const isUserLoggedIn = () => {
    const username = sessionStorage.getItem("authenticatedUser");

    if (username == null) {
        return false;
    }
    else {
        return true;
    }
}

// 세션 스토리지에서 로그인한 유저 이름 조회
export const getLoggedInUser = () => {
    const username = sessionStorage.getItem("authenticatedUser");
    return username;
}
