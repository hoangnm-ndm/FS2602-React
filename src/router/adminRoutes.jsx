import Dashboard from "@/pages/admin/Dashboard";

const adminRoutes = [
  { index: true, element: <Dashboard /> },
  { path: "/settings", element: <Dashboard /> },
  { path: "/abc", element: <Dashboard /> },
  { path: "/xyz", element: <Dashboard /> },
];

export default adminRoutes;
