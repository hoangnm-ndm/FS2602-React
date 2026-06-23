import { UserContext } from "@/context/userContext";
import React, { useContext } from "react";
import { NavLink } from "react-router";

const HeaderClient = () => {
  const { user } = useContext(UserContext);
  return (
    <header>
      <div className="logo">Logo</div>
      <div>Hello {user.fullname}</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderClient;
