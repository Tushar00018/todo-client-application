import { useState, type ReactNode } from "react"
import AuthContext from "./AuthContext"

interface AuthProvider {
    children: ReactNode;
}

const AuthProvider = ({ children }: AuthProvider) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const value = { isLoggedIn, setIsLoggedIn };

    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;