// src/api/authApi.js
import api from "./index.js"; // Axios client instance đã cấu hình ở bài trước

export const authLogin = async (dataUser) =>
  await api.post("/auth/login", dataUser);
export const authRegister = async (dataUser) =>
  await api.post("/auth/register", dataUser);
