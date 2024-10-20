import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";

const Header = () => {
  const authstatus = useSelector((state) => state.auth.status);
  console.log(authstatus);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    dispatch(logout());
    const fetchData = await fetch("/api/logout", {
      method: "get",
      credentials: "include",
    });
    const dataApi = await fetchData.json();
    if (dataApi.success) {
      dispatch(logout());
    }
  };

  return (
    <nav className="">
      <div className="block md:hidden header-text bg-red-300 rounded-lg border-2 p-1 ">
        <button 
          onClick={toggleMenu}
          >
            <BsThreeDotsVertical />
          </button>
      </div>
      <div className={`md:block ${
            isOpen ? "block" : "hidden"
            
          } `}>
        <div
          className="bg-red-300 flex w-full p-5 flex-col gap-4 justify-around rounded-lg border-2 md:flex-row "
        >
          <div className="">
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>
          <div className="header-text">
            <Link to={"/"}>Home</Link>
          </div>
          <div className="header-text">
            <Link to={"/"}>Explore</Link>
          </div>
          <div className="header-text">
            <Link to={"/about"}>About</Link>
          </div>
          <div className="">
            {!authstatus && (
              <div className="header-text ">
                <Link to={"/login"}>Login</Link>
              </div>
            )}
            {authstatus && (
              <div className="header-text  ">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
