import React, { createContext, useState} from "react";

export const UserContext = createContext({})

export function UserProvider(props){
    
    const [addUser,setAddUser] = useState(false)
    const [userData,setUserData] = useState({
        email : '',
        senha: ''
    })

    

    return (
        <UserContext.Provider value={{addUser,setAddUser}}>
            {props.children}
        </UserContext.Provider>
    )
}
