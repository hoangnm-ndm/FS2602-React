import axios from "axios";
import { toast } from "sonner";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  // http:localhost:8888/api/auth/register
  timeout: 5000,
});

export const handleAsync = (promise) => {
  promise.catch((err) => {
    console.log(err);
    toast.error(`Có lỗi: ${err}`);
  });
};

export default api;
