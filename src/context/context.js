import React,{createContext} from 'react'

mainContext = createContext();

export const useMainContext =()=>{
    return useContext(mainContext)
}


export  function Provider({children}) {
    return (
        <mainContext.Provider>
            {children}
        </mainContext.Provider>
    )
}
