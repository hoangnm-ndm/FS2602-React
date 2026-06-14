import React from "react";

const ProtectedRouter = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const accessToken = localStorage.getItem("accessToken");

  if (user && user.role === "admin") <div>{children}</div>;

  return <h1>Bạn không có quyền vào trang này!</h1>;
};

export default ProtectedRouter;
