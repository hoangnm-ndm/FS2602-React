import React from "react";
import { Outlet } from "react-router";

const LayoutAuth = () => {
  return (
    <div>
      <h1>Chao mung ban!</h1>
      <Outlet />
    </div>
  );
};

export default LayoutAuth;
