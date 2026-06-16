import BlogFormPage from "@/pages/admin/BlogFormPage";
import BlogPage from "@/pages/admin/BlogPage";
import Dashboard from "@/pages/admin/Dashboard";

const adminRoutes = [
  { index: true, element: <Dashboard /> },
  { path: "blogs", element: <BlogPage /> },
  { path: "blogs/add", element: <BlogFormPage /> },
  { path: "blogs/update/:id", element: <BlogFormPage /> },
  { path: "settings", element: <Dashboard /> },
];

export default adminRoutes;
