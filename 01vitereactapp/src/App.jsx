
import Render from "./chai"     // import just like app.jsx in main.jsx

function App() {
  const variable = 'Varibale'
  return (
    <>
      
      <div> <h1>First React App Using Vite</h1> 
      </div>
      <Render />
      <h1>Vite + React | {variable} </h1>
      
      
    </>
  )
}

export default App
