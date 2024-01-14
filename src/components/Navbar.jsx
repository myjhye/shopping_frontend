import React from "react"
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { isUserLoggedIn } from "../services/AuthService";

export default function Navbar() {

    const isAuth = isUserLoggedIn();

    return (
        <header className="flex justify-between border-b border-gray-300 p-2">
            <Link 
                to='/products'
                className="flex items-center text-4xl text-brand"
            >
                <FiShoppingBag />
                <h1>Shoppy</h1>
            </Link>
            <nav className="flex items-center gap-4 font-semibold">
                <Link to='/products'>Products</Link>
                <Link to='/carts'>Carts</Link>
                <Link to='/products/new'
                    className="text-2xl"
                >
                    <BsFillPencilFill />
                </Link>
                {
                    !isAuth && (
                        <Link to='/login'>
                            <button>Login</button>
                        </Link>
                    )
                }
                {
                    isAuth && (
                        <Link to='/login'>
                            <button>Logout</button>
                        </Link>
                    )
                }
            </nav>
        </header>
    )
}