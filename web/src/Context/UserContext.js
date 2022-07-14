import React, { createContext, useState} from "react";

export const UserContext = createContext({})

export function UserProvider(props){
    
    const [addUser,setAddUser] = (false);

    return (
        <UserContext.Provider value={{addUser,setAddUser}}>
            {props.children}
        </UserContext.Provider>
    )
}
