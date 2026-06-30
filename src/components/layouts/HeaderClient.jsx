import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import { NavLink } from "react-router";

const HeaderClient = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <header>
      <div className="logo">Logo</div>
      <div>Hello {user?.fullName}</div>
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
