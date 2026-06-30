// src/api/authApi.js
import api from "./index.js"; // Axios client instance đã cấu hình ở bài trước

export const authApi = {
  async authLogin(dataUser) {
    const { data } = await api.post("/auth/login", dataUser);
    return data;
  },
  async authRegister(dataUser) {
    const { data } = await api.post("/auth/register", dataUser);
    return data;
  },
  async authGetMe() {
    const { data } = await api.get("/auth/me");
    return data;
  },
  async authLogout(refreshToken) {
    const { data } = await api.post("/auth/logout", { refreshToken });
    return data;
  },
};
