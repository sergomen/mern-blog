// import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  return (
    <nav className="w-full flex justify-between items-center border-b-2 p-2">
        <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
            <img src={logo} alt="Logo" className="w-24 h-24 object-contain" />
            
            {/* <Logo /> */}
            {/* <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">seriu</span> */}
        </Link>
        <form>
            <div className="flex items-center h-10 border rounded-xl  bg-gray-300 ">
                <input
                    type="text"
                    placeholder="Search..."
                    className="hidden lg:inline bg-gray-300"
                />
                <AiOutlineSearch className="hidden lg:inline" />
            </div>
        </form>
        <div className="flex justify-center items-center w-12 h-10 border rounded-xl lg:hidden bg-gray-300">
            <input type="button" />
            <AiOutlineSearch />
        </div>  
        <div className="flex justify-center items-center w-12 h-10 border rounded-xl bg-gray-300">
            <input type="button" className="hidden sm:inline" />
            <FaMoon className="hidden sm:inline" />
            <Link to="sign-in">
                <input type="button">
                    Sign In
                </input>
            </Link>
        </div>
    </nav>
  )
}
