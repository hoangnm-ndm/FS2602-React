import LayoutAdmin from "@/components/layouts/LayoutAdmin";
import LayoutAuth from "@/components/layouts/LayoutAuth";
import LayoutClient from "@/components/layouts/LayoutClient";
import AboutPage from "@/pages/client/AboutPage";
import ContactPage from "@/pages/client/ContactPage";
import HomePage from "@/pages/client/HomePage";
import LoginPage from "@/pages/auth/LoginPage";
import NotFoundPage from "@/pages/client/NotFoundPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import { createBrowserRouter, RouterProvider } from "react-router";
import Dashboard from "@/pages/admin/Dashboard";
import ProductPage from "@/pages/client/ProductPage";
import { ProductDetailPage } from "@/pages/client/ProductDetailPage";
import ProtectedRouter from "./ProtectedRouter";
import adminRoutes from "./adminroutes";

const router = createBrowserRouter([
  // * CLIENT
  {
    path: "/",
    element: <LayoutClient />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "products", element: <ProductPage /> },
      { path: "products/:id", element: <ProductDetailPage /> },
    ],
  },

  // * AUTH
  {
    path: "/auth",
    element: <LayoutAuth />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },

  {
    path: "/admin",
    element: (
      // <ProtectedRouter>
      <LayoutAdmin />
      // </ProtectedRouter>
    ),
    children: adminRoutes,
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
