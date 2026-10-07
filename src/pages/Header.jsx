import React from 'react'
import { Search } from 'lucide-react'
import { Link } from 'react-router'
function Header() {
    return (
        <div>
            <header className="navbar justify-between p-4 shadow-2xs bg-gray-400 shadow-2xl">
                <div className="navbar-start gap-4">
                    <div>
                        <img src="src/assets/ZeroHero.png" alt="logo" className="w-20" />
                    </div>
                    <span>
                        <h1 className="font-bold text-2xl text-white">M.Abid Fahlavi Zuljalal BK.</h1>
                    </span>
                </div>
                <div>
                    <div className="flex gap-4 font-serif text-2xl text-white shadow-2xl">
                        <Link to="/" className="hover:text-red-600">Home</Link>
                        <Link to="/about" className="hover:text-red-600">About</Link>
                        <Link to="/produk" className="hover:text-red-600">Product</Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header