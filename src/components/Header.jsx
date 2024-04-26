/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

export default function Header() {
  const { user, logOut } = useContext(AuthContext);
  console.log("Context", user);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            Sojib's Coaching
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <details>
                <summary>Class</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/class8">Class 8</Link>
                  </li>
                  <li>
                    <Link to="/class9">Class 9</Link>
                  </li>
                  <li>
                    <Link to="/class10">Class 10</Link>
                  </li>
                  <li>
                    <Link to="/class11">Class 11</Link>
                  </li>
                  <li>
                    <Link to="/class12">Class 12</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              {user?.email && (
                <span className="mx-8">
                  Welcome{" "}
                  <span className="mx-2 font-semibold">{user.email}</span>{" "}
                </span>
              )}
            </li>
          </ul>
        </div>
        {user?.email ? (
          <div className="navbar-end">
            <a onClick={handleSignOut} className="btn btn-error">
              Sign out
            </a>
          </div>
        ) : (
          <div className="navbar-end">
            <Link to="/login" className="btn btn-accent">
              Sign in
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
