import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="text-2xl font-extrabold text-blue-700">
                    مين ناويها؟
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
                    <NavLink to="/" className="hover:text-blue-600 duration-200">
                        الرئيسية
                    </NavLink>

                    <NavLink to="/events" className="hover:text-blue-600 duration-200">
                        الفعاليات
                    </NavLink>

                    <NavLink to="/support" className="hover:text-blue-600 duration-200">
                        الدعم
                    </NavLink>
                </div>

                {/* Desktop CTA */}
                <Link
                    to="/register"
                    className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 duration-200 shadow"
                >
                    اشترك الآن
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden focus:outline-none text-gray-700 text-3xl"
                >
                    {isOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute w-full bg-white shadow-inner py-4 px-6 animate-fadeIn">

                    <NavLink
                        to="/"
                        className="block py-2 text-lg text-gray-700 hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                    >
                        الرئيسية
                    </NavLink>

                    <NavLink
                        to="/events"
                        className="block py-2 text-lg text-gray-700 hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                    >
                        الفعاليات
                    </NavLink>

                    <NavLink
                        to="/support"
                        className="block py-2 text-lg text-gray-700 hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                    >
                        الدعم
                    </NavLink>

                    <Link
                        to="/register"
                        onClick={() => setIsOpen(false)}
                        className="block mt-3 bg-blue-600 text-white px-5 py-3 rounded-xl text-center hover:bg-blue-700 duration-200 shadow"
                    >
                        اشترك الآن
                    </Link>
                </div>
            )}
        </nav>
    );
}
