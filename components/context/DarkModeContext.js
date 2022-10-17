import React,{ createContext, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider(props){

    const [darkMode, setDarkMode] = useState(false);
    const handleDarkMode=()=>{
        setDarkMode(!darkMode);
    }
    return(
        <>
        <DarkModeContext.Provider value={{darkMode,handleDarkMode}}>
        {props.children}
        </DarkModeContext.Provider>
        </>
    )
}

export {DarkModeContext,DarkModeProvider}
