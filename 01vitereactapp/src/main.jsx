import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h2>This is a method which are created directed in main.jsx not in app.jsx</h2>
    </div>
  )
}

// const ReactElement = {
//   type : 'a',
//   props : {
//       href : 'https://www.google.com',
//       target : '_blank'
//   },
//   children : 'Click me to visit google.com'      
// }

const variable = '.com'
const ReactElement = React.createElement(
  'a',
  {href: 'https://www.youtube.com' , target : '_blank'},
  'Click me to visit youtube' ,
  variable                        // after 3 parameter we can call var also.
)

const RunElement = (
  <a href="https://www.google.com" target='_blank'>Visit Google..</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(

  // root.render accept only one argument at a time.
  
  //<App />                 // here we're rending app,.jsx and app.jsx is a function which returning only  
  //<MyApp />
  //MyApp()             // we can like this also bcz MyApp is a function only..but this not best approach
  //<ReactElement />    // it will not work. see Day-3 Notes why ReactElement is not running..

  //RunElement            // it will work..
  ReactElement          // Now ReactElement will work..

 
  
    
  
)
