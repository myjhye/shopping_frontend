import { useState } from "react"
import { Link } from "react-router-dom";

export default function Signup() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 shadow-md rounded-md w-96">
                <h2 className="text-2xl font-semibold mb-4">회원가입</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block font-medium mb-1">유저명</label>
                        <input
                            type="username"
                            id="username"
                            name="username"
                            className="w-full border rounded-md px-3 py-2"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium mb-1">이메일</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border rounded-md px-3 py-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-medium mb-1">비밀번호</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full border rounded-md px-3 py-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block font-medium mb-1">비밀번호 확인</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="w-full border rounded-md px-3 py-2"
                            value={confirmPassword}
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