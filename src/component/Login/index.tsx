import type React from "react";
import { useLogin } from "../../query/useLogin";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import RouteContext from "../../context/RouteContext/RouteContext";
import type { Routes } from "../../context/RouteContext/routeConfig";

const LoginPage: React.FC = () => {

    const { mutate: login } = useLogin();
    const navigate = useNavigate();
    const { setIsLoggedIn } = useContext(AuthContext);
    const { setAppRoutes } = useContext(RouteContext);

    const handleLoginClick = () => {
        login({
            "userName": "virat",
            "password": "Virat@123"
        }, {
            onSuccess: (data: any) => {
                setIsLoggedIn(true);
                localStorage.setItem('token', data.data);
                setAppRoutes((prev: any) => {
                    return prev.map((route: Routes) => (
                        route.key === 'todo' ? { ...route, isProtected: false } : route
                    ))
                })
                navigate('/todo');
            },
            onError: () => {
                localStorage.setItem('token', '');
                setIsLoggedIn(false);
            }
        });
    }

    return (
        <div className="login-page">
            <button onClick={handleLoginClick} >Login</button>
        </div>
    )
}

export default LoginPage;