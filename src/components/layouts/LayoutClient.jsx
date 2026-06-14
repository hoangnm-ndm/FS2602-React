import React from "react";
import { Outlet } from "react-router";
import HeaderClient from "./HeaderClient";
import FooterClient from "./FooterClient";

const LayoutClient = () => {
  return (
    <div>
      <HeaderClient />

      <Outlet />
      <FooterClient />
    </div>
  );
};

export default LayoutClient;
