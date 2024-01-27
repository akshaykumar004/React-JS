
import { useContext , createContext } from "react";

// this method we used in previous context api example so here we'll use another way.

// const themeContext =    React.createContext({
//     themeMode: "light",
//     darkTheme: () => {},
//     lightTheme: () => {}
// })

//export default themeContext;

// we can write like this also. this is another way to create context. directly export in this line only

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
}) 
          
  /* below we're directly declaring manual hook called useTheme and creating themeProvider.. Inside hook passing themeContext inside so that 
  whenever required we have to import only useTheme hook and it will directly import themeContext.
   
  benifit of this is - we dont need to import two times as in previous exp we were doing.
  and dont need to create seperate context provider and pass children inside and then call it. */


// export const ThemeProvider = ThemeContext.Provider      

// export default function useTheme() {
//     return useContext(ThemeContext)
// }

// export const ThemeContext = createContext({
//     themeMode: "light",
//     darkTheme: () => {},
//     lightTheme: () => {},
// })

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}