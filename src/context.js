import React from 'react'
import {useState, useContext} from 'react'

const Appcontext = React.createContext();

function Appwrapper({children}) {
    const [userinfo, setUserinfo] = useState();

    const loggedUser = (userdetails) => {
        setUserinfo(userdetails);
    }
  
    return (
        <Appcontext.Provider value={{
            userinfo,
            loggedUser
        }}>
            {children}
        </Appcontext.Provider>
    )
}
export const UseGlobalContext = () => {
    return useContext(Appcontext);
}

export default Appwrapper;
