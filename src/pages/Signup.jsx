import { useState } from "react"
import { Link } from "react-router-dom";
import { signupAPICall } from "../services/AuthService";

export default function Signup() {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

        const register = {name, username, email, password}
        console.log(register);

        signupAPICall(register)
            .then((res) => {
                console.log(res.data);
            })
            .catch(error => {
                console.error(error);
            })
    }



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 shadow-md rounded-md w-96">
                <h2 className="text-2xl font-semibold mb-4">회원가입</h2>
                <form onSubmit={handleSignup}>
                    <div className="mb-4">
                        <input
                            type="name"
                            id="name"
                            name="name"
                            className="w-full border rounded-md px-3 py-2"
                            value={name}
                            placeholder="성명"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="username"
                            id="username"
                            name="username"
                            className="w-full border rounded-md px-3 py-2"
                            value={username}
                            placeholder="사용자 이름"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border rounded-md px-3 py-2"
                            value={email}
                            placeholder="이메일"
                            onChange={(e) => setEmail(e.target.value)}
                            required
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
                    <div className="mb-4">
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="w-full border rounded-md px-3 py-2"
                            value={confirmPassword}
                            placeholder="비밀번호 확인"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white py-2 rounded-md hover:brightness-110 mb-5"
                    >
                        회원가입
                    </button>
                    <span>이미 아이디가 있으신가요?</span>
                    <Link
                        to='/login'
                        className="text-blue-500 cursor-pointer ml-2"
                    >
                        로그인
                    </Link>
                </form>
            </div>
        </div>
    )
}