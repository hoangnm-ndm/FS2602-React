// src/schemas/authSchema.js
import { z } from "zod";

export const registerSchema = z
  .object({
    username: z.string().min(6, "Tên đăng nhập phải chứa ít nhất 6 ký tự"),
    email: z.string().email("Định dạng email không hợp lệ"),
    password: z.string().min(6, "Mật khẩu phải chứa ít nhất 6 ký tự").max(255),
    confirmPass: z
      .string()
      .min(6, "Mật khẩu xác nhận phải chứa ít nhất 6 ký tự")
      .max(255),
  })
  // Kiểm tra tính trùng khớp của mật khẩu
  .refine((data) => data.password === data.confirmPass, {
    message: "Mật khẩu xác nhận không trùng khớp",
    path: ["confirmPass"],
  });

export const loginSchema = z.object({
  email: z.string().email("Định dạng email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải chứa ít nhất 6 ký tự").max(255),
});
