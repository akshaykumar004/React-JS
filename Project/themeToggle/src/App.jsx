// ------------------ Context API Part -------------------------

import { useEffect, useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'



// function App() {

//   return (
//     <UserContextProvider>
//       <h1>Context API</h1>
//       <Login />
//       <Profile />
//     </UserContextProvider>
//   )
// }

// export default App


//===============================================================================================
//-------------------- theme toggler Part -------------------------------------------------
//==================================================================================================

import React from 'react'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

  const [themeMode, setThemeMode] = useState("light")       // using setTheme object we can set theme..

  const lightTheme = () => {
    setThemeMode('light')             // this will set theme as light
  }
  const darkTheme = () => {
    setThemeMode('dark')              // this will set theme as dark
  }
  
  // How theme chnage will work --------------
  
  useEffect(() => {
    document.querySelector('html').classList.remove('light','dark')     // this will remove both theme mode 
    document.querySelector('html').classList.add(themeMode)         // this will add themeMode and themeMode will work on basis of declaration
  }, [themeMode])
  



  return (

    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <h3 className=''>Theme Toggler</h3>
      <div className="flex flex-wrap  items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">  

              <ThemeBtn />
              
              </div>
              <div className="w-full max-w-sm mx-auto">  

              <Card />
              
              </div>
          </div>
      </div>

    </ThemeProvider>
    
  )
}

export default App
