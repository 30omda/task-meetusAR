import { createBrowserRouter } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import Layout from "@/layout/Layout";
import LoginPage from "@/pages/LoginPage/LoginPage";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Profile from "@/pages/Profile/Profile";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthRoutes />,
        children: [
            {
                element: <Layout />,
                children: [
                    {
                        index: true,
                        element: <Dashboard />,
                    },
                    {
                        path: 'profile',
                        element: <Profile />,
                    },
                ],
            },
        ],
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
]);

export default router;