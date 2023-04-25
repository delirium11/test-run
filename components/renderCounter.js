import React from "react";

export const AppContext = React.createContext()

export const AppContextProvider = ({ children }) => {

    const [ navbarRenderCount, setNavbarRenderCount ] = React.useState(0);

    const [ mintPageRenderCount, setMintPageRenderCount ] = React.useState(0);

    return (

        <AppContext.Provider value={{ navbarRenderCount, setNavbarRenderCount, 
            mintPageRenderCount, setMintPageRenderCount }}>

            {children}
        
        </AppContext.Provider>
    )

}