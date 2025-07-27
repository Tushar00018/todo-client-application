import { createContext } from "react";
import { routes, type Routes } from "./routeConfig";

interface RouteContext {
    appRoutes: Routes[],
    setAppRoutes: any;
}

const RouteContext = createContext<RouteContext>({ appRoutes: routes, setAppRoutes: () => { } });

export default RouteContext;