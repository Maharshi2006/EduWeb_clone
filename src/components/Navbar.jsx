import React from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import '../App.css'

const Navbar = () => {

    return (
        <header className="top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <a href="/" className="text-2xl font-bold text-teal-600">
                    EduWeb
                </a>
                <nav className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
                    <a href="/" className="hover:text-teal-600">Home</a>
                    <a href="/" className="hover:text-teal-600">About</a>
                    <a href="/" className="hover:text-teal-600">Courses</a>
                    <a href="/" className="hover:text-teal-600">Blog</a>
                    <a href="/" className="hover:text-teal-600">Contact</a>
                </nav>
                <div className="hidden md:flex items-center space-x-4">
                    <button aria-label="Search">
                        <Search className="w-5 h-5 text-gray-600 hover:text-teal-600" />
                    </button>
                    <button aria-label="Cart">
                        <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-teal-600" />
                    </button>
                    <button className="text-l ml-2 bg-teal-600 text-white px-5 py-3 hover:bg-teal-700 transition">
                        Try for Free
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar;