import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRoutes = () => {
    const user = useSelector((state) => state.auth.user);
    const isLoading = useSelector((state) => state.auth.isLoading);
    const isEmployee = useSelector(state => state.auth.isEmployee);

    if (isLoading) {
        return <div className="text-center py-10">Loading...</div>;
    }
    if (!user || !isEmployee == true) {
        return <Navigate to="/login" replace />;
    } else {
        return <Outlet />;
    }

};

export default AuthRoutes;

