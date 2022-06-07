import React, { createContext, useState } from "react";

export const authContext = createContext();

export default function Auth({children}){

    const [userData, setUserData] = useState({
        userName: '',
        id: 0,
        admin: false
    })

    return <authContext.Provider value={{
        userData,
        setUserData
    }}>
        {children}
    </authContext.Provider>
}