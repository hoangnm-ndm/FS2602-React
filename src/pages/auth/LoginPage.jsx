// src/pages/LoginPage.jsx

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import { loginSchema } from "@/schemas/authSchema";
import { authLogin } from "@/api/authApi";

const LoginPage = () => {
  const nav = useNavigate();

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (dataUser) => {
    try {
      const { data } = await authLogin(dataUser);

      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("user", JSON.stringify(data.user));

        if (window.confirm("Đăng nhập thành công! Quay lại trang chủ?")) {
          nav("/");
        }
      }
    } catch (err) {
      console.error("Login failed:", err);

      alert(
        err.response?.data?.message || "Email hoặc mật khẩu không chính xác."
      );

      reset();
    }
  };

  return (
    <div className="container mx-auto flex min-h-[80vh] items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Đăng Nhập</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                {...register("email")}
              />

              {errors.email && (
                <p className="text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>

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

            <div className="text-right text-sm">
              <Link to="/register" className="text-primary hover:underline">
                Chưa có tài khoản?
              </Link>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Đang đăng nhập..." : "Đăng Nhập"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
