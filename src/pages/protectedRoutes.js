import { Navigate, Outlet } from "react-router-dom";

const user = {loggedIn: false}

export const login = () => {
    user.loggedIn = true;
}

export const logout = () => {
    user.loggedIn = false;
}

const useAuth = () => {
    return user && user.loggedIn;
}

const ProtectedRoutes = () =>{
    const isAuth = useAuth();
    return isAuth ? <Outlet/>: <Navigate to={'/'}/>;
}

export default ProtectedRoutes;