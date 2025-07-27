import { useEffect, useState, type ReactNode } from "react";
import RouteContext from "./RouteContext";
import { routes, type Routes } from "./routeConfig";

interface RouteProvider {
    children: ReactNode;
}

const RouteProvider = ({ children }: RouteProvider) => {

    const data = localStorage.getItem('routes');
    const routers = data ? JSON.parse(data) : routes
    const [appRoutes, setAppRoutes] = useState<Routes[]>(routers);

    useEffect(() => {
        localStorage.setItem('routes', JSON.stringify(appRoutes));
    }, [appRoutes]);

    return (
        <RouteContext.Provider value={{ appRoutes, setAppRoutes }} >
            {children}
        </RouteContext.Provider>
    )
}

export default RouteProvider;