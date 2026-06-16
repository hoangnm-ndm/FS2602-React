import React from "react";
import { Link } from "react-router";

const HeaderAdmin = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/admin/blogs">Blogs</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default HeaderAdmin;
