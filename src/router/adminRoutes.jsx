import BlogFormPage from "@/pages/admin/BlogFormPage";
import { BlogFormPage2 } from "@/pages/admin/BlogFormPage2";
import BlogPage from "@/pages/admin/BlogPage";
import Dashboard from "@/pages/admin/Dashboard";

const adminRoutes = [
  { index: true, element: <Dashboard /> },
  { path: "blogs", element: <BlogPage /> },
  { path: "blogs/add", element: <BlogFormPage2 /> },
  { path: "blogs/update/:id", element: <BlogFormPage2 /> },
  { path: "settings", element: <Dashboard /> },
];

export default adminRoutes;
