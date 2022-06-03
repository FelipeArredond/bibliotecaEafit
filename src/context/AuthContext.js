import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({children}){
    
    const [userData,setUserData] = useState({
        name:"",
        id_lector:0
    })
    return <AuthContext.Provider value={{userData, setUserData}} >{children}</AuthContext.Provider>
}
