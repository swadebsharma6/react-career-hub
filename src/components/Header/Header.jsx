import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";


const Header = () => {

  const {user, logOutUser} = useContext(AuthContext);

    const links = <>
    <li> <NavLink to='/'>Home</NavLink> </li>
    <li> <NavLink to='/applied'>Applied Jobs</NavLink> </li>
    <li> <NavLink to='/jobs'>Jobs</NavLink> </li>
    <li> <NavLink to='/statistic'>Statistics</NavLink> </li>
    <li> <NavLink to='/login'>Login</NavLink> </li>
    <li> <NavLink to='/register'>Register</NavLink> </li>

    </>
  return (
    <div className="navbar py-3 bg-base-200 rounded">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu  text-xl  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           {links}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl font-bold  ">Career Hub</a>
        {user?.uid && <span className="text-purple-500 font-bold">{user.email}</span> }
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu font-bold menu-horizontal px-1">
         {links}
        </ul>
      </div>
      <div className="navbar-end">
      {user   
        ? <button onClick={logOutUser} className="btn btn-sm btn-primary">SignUp</button> 
        : <Link to='/login'><button className="btn btn-sm  btn-secondary">Login</button></Link>}
        
      </div>
    </div>
  );
};

export default Header;
