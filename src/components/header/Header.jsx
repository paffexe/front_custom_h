import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
const Header = () => {
  const {pathname} = useLocation()
  const isPink = pathname === "/about" || pathname === "/contact"
  return (
    <header className={`${isPink ? "bg-pink-300" : ""} flex h-20 items-center gap-4`}>
      <div>Header</div>
      <NavLink className={({isActive})=> `uppercase ${isActive ? "text-red-500 underline" : ""}`} to={"/"}>Home</NavLink>
      <NavLink className={({isActive})=> `uppercase ${isActive ? "text-red-500 underline" : ""}`} to={"/about"}>About</NavLink>
      <NavLink className={({isActive})=> `uppercase ${isActive ? "text-red-500 underline" : ""}`} to={"/contact"}>Contact</NavLink>
      <NavLink className={({isActive})=> `uppercase ${isActive ? "text-red-500 underline" : ""}`} to={"/login"}>Login</NavLink>
      <NavLink className={({isActive})=> `uppercase ${isActive ? "text-red-500 underline" : ""}`} to={"/service"}>Service</NavLink>
      <NavLink className={({isActive})=> `uppercase ${isActive ? "text-red-500 underline" : ""}`} to={"/users"}>Users</NavLink>
      <NavLink className={({isActive})=> `uppercase ${isActive ? "text-red-500 underline" : ""}`} to={"/post"}>Post</NavLink>

      


    </header>
  );
};

export default Header;
