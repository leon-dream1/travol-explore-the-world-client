import { NavLink, useNavigate } from "react-router-dom";
import userIcon from '../../src/assets/images/user.png'
import logo from "../../public/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, logOut, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        setUser("");
      })
      .catch((error) => console.log(error));
  };


  return (
    <div className="bg-slate-600 py-2">
      <div className="container mx-auto ">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? " text-amber-600 text-[18px] font-raleway font-bold"
                      : "text-white text-[18px] font-merriweather font-medium"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/allTouristSpot"
                  className={({ isActive }) =>
                    isActive
                      ? " text-amber-600 text-[18px] font-raleway font-bold"
                      : "text-white text-[18px] font-merriweather font-medium"
                  }
                >
                  All Tourist Spot
                </NavLink>
                <NavLink
                  to="/addTouristSpot"
                  className={({ isActive }) =>
                    isActive
                      ? " text-amber-600 text-[18px] font-raleway font-bold"
                      : "text-white text-[18px] font-merriweather font-medium"
                  }
                >
                  Add Tourist Spot
                </NavLink>
                <NavLink
                  to="/myList"
                  className={({ isActive }) =>
                    isActive
                      ? " text-amber-600 text-[18px] font-raleway font-bold"
                      : "text-white text-[18px] font-merriweather font-medium"
                  }
                >
                  My List
                </NavLink>
              </ul>
            </div>
            <img src={logo} className="w-[40%] cursor-pointer" alt="" />
            {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? " text-amber-600 text-[18px] font-raleway font-bold"
                    : "text-white text-[18px] font-merriweather font-medium"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/allTouristSpot"
                className={({ isActive }) =>
                  isActive
                    ? " text-amber-600 text-[18px] font-raleway font-bold"
                    : "text-white text-[18px] font-merriweather font-medium"
                }
              >
                All Tourist Spot
              </NavLink>
              <NavLink
                to="/addTouristSpot"
                className={({ isActive }) =>
                  isActive
                    ? " text-amber-600 text-[18px] font-raleway font-bold"
                    : "text-white text-[18px] font-merriweather font-medium"
                }
              >
                Add Tourist Spot
              </NavLink>
              <NavLink
                to="/myList"
                className={({ isActive }) =>
                  isActive
                    ? " text-amber-600 text-[18px] font-raleway font-bold"
                    : "text-white text-[18px] font-merriweather font-medium"
                }
              >
                My List
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end">
            <div>
              {user ? (
                <div className="flex items-center space-x-4">
                  <div className="dropdown dropdown-end">
                    <div>
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div
                          className="w-10 rounded-full"
                          data-tooltip-id="my-tooltip"
                        >
                          <img
                            alt="Tailwind CSS Navbar component"
                            src={user.photoURL ? user.photoURL : { userIcon }}
                          />
                        </div>
                      </div>
                      <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <a>{user.displayName}</a>
                        </li>
                      </ul>
                    </div>
                    <Tooltip id="my-tooltip" content={user.displayName} offset={30}/>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="bg-[#ee4040] text-white  text-[14px] md:text-[18px] font-merriweather font-semibold px-[20px] md:px-[35px] py-[10px] rounded-lg"
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <div className="space-x-6">
                  <button
                    onClick={() => navigate("/login")}
                    className="bg-blue-600 text-white text-[18px] px-[25px] py-[15px] rounded-md font-merriweather"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => navigate("/register")}
                    className="bg-blue-600 text-white text-[18px] px-[25px] py-[15px] rounded-md font-merriweather"
                  >
                    Register
                  </button>
                </div>
              )}

              {/* <button
                onClick={() => navigate("/login")}
                className="bg-blue-600 text-white text-[18px] px-[25px] py-[15px] rounded-md font-merriweather"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="bg-blue-600 text-white text-[18px] px-[25px] py-[15px] rounded-md font-merriweather"
              >
                Register
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
