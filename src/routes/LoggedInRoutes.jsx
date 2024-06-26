import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import LoginScreen from "../pages/Login";

export default function LoggedInRoutes() {
    const { user } = useSelector((state) => state.user);
    
    return user ? <Outlet /> : <LoginScreen />;
}