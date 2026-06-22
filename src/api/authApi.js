// src/api/authApi.js
import api from "./index.js"; // Axios client instance đã cấu hình ở bài trước

export const authLogin = (dataUser) => api.post("/login", dataUser);
export const authRegister = (dataUser) => api.post("/register", dataUser);
