import { Link, useLocation } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuUserRound } from "react-icons/lu";

export const Navbar = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <>
      <nav
        className={`top-0 left-0 w-full z-50 transition-all duration-300 ${
          isHome
            ? "absolute"
            : "sticky bg-white shadow-md border-b border-gray-200"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between px-8 py-6 transition-all duration-300 ${
            isHome ? "text-white" : "text-black"
          }`}
        >
          {/* Logo */}
          <Link to="/">
            <h1
              className={`text-4xl font-bold font-serif cursor-pointer ${
                isHome ? "text-white" : "text-black"
              }`}
            >
              King
              <span className="text-yellow-500">_Collection</span>
            </h1>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              to="/"
              className="text-sm uppercase tracking-widest hover:text-yellow-500 transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/shop"
              className="text-sm uppercase tracking-widest hover:text-yellow-500 transition duration-300"
            >
              Shop
            </Link>

            <Link
              to="/collection"
              className="text-sm uppercase tracking-widest hover:text-yellow-500 transition duration-300"
            >
              Collections
            </Link>

            <Link
              to="/about"
              className="text-sm uppercase tracking-widest hover:text-yellow-500 transition duration-300"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-sm uppercase tracking-widest hover:text-yellow-500 transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-3 md:gap-5 text-2xl">
            <IoSearchOutline className="cursor-pointer hover:text-yellow-500 transition duration-300 hover:scale-110" />
            <FiHeart className="cursor-pointer hover:text-yellow-500 transition duration-300 hover:scale-110" />
            <HiOutlineShoppingBag className="cursor-pointer hover:text-yellow-500 transition duration-300 hover:scale-110" />
            <LuUserRound className="cursor-pointer hover:text-yellow-500 transition duration-300 hover:scale-110" />
          </div>
        </div>
      </nav>
    </>
  );
};