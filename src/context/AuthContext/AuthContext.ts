import { createContext } from "react";

export interface AuthContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType>({ isLoggedIn: false, setIsLoggedIn: () => { } });

export default AuthContext;