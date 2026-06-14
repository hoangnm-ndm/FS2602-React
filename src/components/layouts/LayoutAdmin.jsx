import React from "react";
import { Outlet } from "react-router";
import HeaderAdmin from "./HeaderAdmin";

const LayoutAdmin = () => {
  return (
    <div>
      <HeaderAdmin />
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
