import { Github } from "lucide-react";
import { Link, NavLink } from "react-router";
import Container from "./Container";

const Navbar = () => {
  return (
    <Container>
      <div className="navbar">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/" className="font-semibold">
                  {({ isActive }) => (
                    <span
                      className={
                        isActive
                          ? "bg-linear-to-t from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline"
                          : ""
                      }
                    >
                      Home
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/apps" className="font-semibold">
                  {({ isActive }) => (
                    <span
                      className={
                        isActive
                          ? "bg-linear-to-t from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline"
                          : ""
                      }
                    >
                      Apps
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/installation" className="font-semibold">
                  {({ isActive }) => (
                    <span
                      className={
                        isActive
                          ? "bg-linear-to-t from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline"
                          : ""
                      }
                    >
                      Installation
                    </span>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>

          <Link
            to="/"
            className="text-xl flex justify-center items-center gap-0.5"
          >
            <img className="h-10" src="/logo.png" alt="" />
            <h1 className="bg-linear-to-t from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
              Hero.IO
            </h1>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/" className="font-semibold">
                {({ isActive }) => (
                  <span
                    className={
                      isActive
                        ? "bg-linear-to-t from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline"
                        : ""
                    }
                  >
                    Home
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/apps" className="font-semibold">
                {({ isActive }) => (
                  <span
                    className={
                      isActive
                        ? "bg-linear-to-t from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline"
                        : ""
                    }
                  >
                    Apps
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/installation" className="font-semibold">
                {({ isActive }) => (
                  <span
                    className={
                      isActive
                        ? "bg-linear-to-t from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline"
                        : ""
                    }
                  >
                    Installation
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <a
            href="https://github.com/ornobsingh1"
            target="_blank"
            className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
          >
            <Github /> Contribute
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
