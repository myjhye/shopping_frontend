import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { loginAPICall, saveLoggedInUser, storeToken } from "../services/AuthService";

export default function Login() {

    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        
        e.preventDefault();

        await loginAPICall(usernameOrEmail, password)
            .then((res) => {
                console.log(res.data);

                const token = 'Basic ' + window.btoa(usernameOrEmail + ":" + password);
                storeToken(token);

                saveLoggedInUser(usernameOrEmail);
                navigate("/products");

                window.location.reload(false);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 shadow-md rounded-md w-96">
                <h2 className="text-2xl font-semibold mb-4">로그인</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <input 
                            type="usernameOrEmail" 
                            id="usernameOrEmail" 
                            name="usernameOrEmail" 
                            className="w-full border rounded-md px-3 py-2" 
                            value={usernameOrEmail}
                            placeholder="닉네임 또는 이메일"
                            onChange={(e) => setUsernameOrEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            className="w-full border rounded-md px-3 py-2"
                            value={password}
                            placeholder="비밀번호"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-red-500 text-white py-2 rounded-md hover:brightness-110 mb-5"
                    >
                        로그인
                    </button>
                    <span>아이디가 없으신가요?</span>
                    <Link
                        to='/signup'
                        className="text-blue-500 cursor-pointer"
                    >
                        회원가입
                    </Link>
                </form> 
            </div>
        </div>
    )
}