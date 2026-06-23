import axios from "axios";
import { toast } from "sonner";

const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

export const handleAsync = (promise) => {
  promise.catch((err) => {
    console.log(err);
    toast.error(`Có lỗi: ${err}`);
  });
};

export default api;
