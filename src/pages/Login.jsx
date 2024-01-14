import { useState } from "react"
import { Link } from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 shadow-md rounded-md w-96">
                <h2 className="text-2xl font-semibold mb-4">로그인</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium mb-1">이메일</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            className="w-full border rounded-md px-3 py-2" 
                            value={email}
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