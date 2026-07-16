import { Link } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuUserRound } from "react-icons/lu";
export const Navbar = () => {
  return (
    <>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6 border-b border-gray-200">
        <h1 className="text-4xl font-bold font-serif cursor-pointer">
          King
          <span className="text-yellow-600 ">
            _Collection
          </span>
        </h1>
        {/* navigation */}
        <div className="flex items-center gap-10">
          <Link className="text-sm uppercase tracking-widest hover:text-yellow-600 transition duration-300" to="/" to='/' >Home</Link>
          <Link className="text-sm uppercase tracking-widest hover:text-yellow-600 transition duration-300" to="/" to='/Shop'>Shop</Link>
          <Link className="text-sm uppercase tracking-widest hover:text-yellow-600 transition duration-300" to="/" to='/Collection'>Collections</Link>
          <Link className="text-sm uppercase tracking-widest hover:text-yellow-600 transition duration-300" to="/" to='/About' > About </Link>
          <Link className="text-sm uppercase tracking-widest hover:text-yellow-600 transition duration-300" to="/" to='/Contact' >Contact</Link>
        </div>


        {/* Right Side */}
        <div className="flex items-center gap-6 text-2xl ">
          <IoSearchOutline className="cursor-pointer hover:text-yellow-600 transition duration-300 hover:scale-110" />
          <FiHeart className="cursor-pointer hover:text-yellow-600 transition duration-300 hover:scale-110" />
          <HiOutlineShoppingBag className="cursor-pointer hover:text-yellow-600 transition duration-300 hover:scale-110" />
          <LuUserRound className="cursor-pointer hover:text-yellow-600 transition duration-300 hover:scale-110" />
        </div>

      </nav>

    </>
  )
}
