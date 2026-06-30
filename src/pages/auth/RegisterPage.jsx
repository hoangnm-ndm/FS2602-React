// src/pages/RegisterPage.jsx

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router";

import { registerSchema } from "@/schemas/authSchema";
import { authRegister } from "@/api/authApi";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RegisterPage = () => {
  const nav = useNavigate();

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPass: "",
    },
  });

  const handleRegister = async (dataBody) => {
    try {
      const { confirmPass, ...payload } = dataBody;
      const { data } = await authRegister(payload);
      console.log(data);
      if (
        data?.data?.email &&
        window.confirm("Đăng ký thành công! Chuyển sang trang đăng nhập?")
      ) {
        nav("/auth/login");
      }
    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message || "Đăng ký thất bại. Vui lòng thử lại."
      );
      console.log(error);
      reset();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl text-center">
            Đăng ký tài khoản
          </CardTitle>

          <CardDescription className="text-center">
            Tạo tài khoản mới để bắt đầu sử dụng hệ thống
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                {...register("email")}
              />

              {errors.email && (
                <p className="text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Username */}
            <div className="space-y-2">
              <Label htmlFor="fullName">Tên đăng nhập</Label>

              <Input
                id="fullName"
                placeholder="Nhập tên đăng nhập"
                {...register("fullName")}
              />

              {errors.fullName && (
                <p className="text-sm text-destructive">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Mật khẩu</Label>

              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register("password")}
              />

              {errors.password && (
                <p className="text-sm text-destructive">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPass">Xác nhận mật khẩu</Label>

              <Input
                id="confirmPass"
                type="password"
                placeholder="••••••••"
                {...register("confirmPass")}
              />

              {errors.confirmPass && (
                <p className="text-sm text-destructive">
                  {errors.confirmPass.message}
                </p>
              )}
            </div>

            <div className="text-right text-sm">
              <Link to="/login" className="text-primary hover:underline">
                Đã có tài khoản?
              </Link>
            </div>

            <Button type="submit" className="w-full">
              Đăng ký
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
