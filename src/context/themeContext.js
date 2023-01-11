import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
    const [theme , setTheme] = useState("dark")
    
    useEffect(() => {
        if(theme === "dark"){
        document.documentElement.classList.add("dark")
        }else {
        document.documentElement.classList.remove("dark")
        }
    
     }, [theme])


     const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
      }
    return (
        <ThemeContext.Provider value={{handleThemeSwitch , theme}} >
            {children}
        </ThemeContext.Provider>
    )
}









    

