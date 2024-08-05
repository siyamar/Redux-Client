import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="">
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <Link to={'/'}><li>Home</li></Link>
      <Link to={'/showBooks'}><li>Show Books</li></Link>
      <Link to={'/addBooks'}><li>Add Books</li></Link>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Redux</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4">
      <Link to={'/'}><li>Home</li></Link>
      <Link to={'/latestBooks'}><li>Latest Books</li></Link>
      <Link to={'/showBooks'}><li>Show Books</li></Link>
      <Link to={'/addBooks'}><li>Add Book</li></Link>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Login</a>
  </div>
</div>
    </div>
  )
}
