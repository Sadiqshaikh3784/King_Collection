import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <>
    <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">

      <h1 className="text-3xl font-bold">
        King<span className="text-yellow-600">_Collection</span>
      </h1>
      {/* navigation */}
      <div className="flex gap-8">
        <Link className="hover:text-yellow-600 transition" to='/' >Home</Link>
        <Link className="hover:text-yellow-600 transition" to='/About'>About</Link>
        <Link className="hover:text-yellow-600 transition" to='/Product'>Product</Link>
        <Link className="hover:text-yellow-600 transition" to='/Cart' >Cart</Link>
        <Link className="hover:text-yellow-600 transition" to='/' ></Link>
      </div>


      {/* Right Side */}
      <div className="flex gap-5" >
        <span>🔍</span>
        <span>❤️</span>
        <span>🛒</span>
      </div>

</nav>

    </>
  )
}
