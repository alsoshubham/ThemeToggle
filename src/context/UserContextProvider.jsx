/* eslint-disable react/prop-types */
import React from "react";
import UserContext from "./UseContext";


const UserContextProvider = ({children}) =>{
    const [User, SetUser] = React.useState(null)
    return(
        <UserContext.Provider value={{User, SetUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;