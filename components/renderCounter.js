import React from "react";

export const AppContext = React.createContext()

export const AppContextProvider = ({ children }) => {

    const [ renderCount, setRenderCount ] = React.useState(0);

    return (

        <AppContext.Provider value={{ renderCount, setRenderCount }}>

            {children}
        
        </AppContext.Provider>
    )

}