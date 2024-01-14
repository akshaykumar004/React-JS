import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    
    <div className='w-full h-screen duration-200 flex flex-col items-center justify-center' 
         style={{backgroundColor:color}}> 
      <h1 style={{ fontSize: '2rem' }}> Default Color is Olive..!
      </h1> {/* to make h1 tag in middle added flex flex-col items-center justify-center*/}
  
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                <button 
                  onClick={() => setColor("red")}
                  className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
                  style={{backgroundColor: "red"}}> Red
                </button>
                <button 
                  onClick={() => setColor("green")}
                  className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
                  style={{backgroundColor: "green"}}> Green 
                </button>
                <button 
                  onClick={() => setColor("blue")}
                  className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
                  style={{backgroundColor: "blue"}}> Blue
                </button>
                <button 
                  onClick={() => setColor("grey")}
                  className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
                  style={{backgroundColor: "grey"}}> Grey
                </button>
                <button 
                  onClick={() => setColor("pink")}
                  className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
                  style={{backgroundColor: "pink"}}> Pink
                </button>
                <button 
                  onClick={() => setColor("yellow")}
                  className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
                  style={{backgroundColor: "yellow"}}> Yellow
                </button>
                <button 
                  onClick={() => setColor("purple")}
                  className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
                  style={{backgroundColor: "purple"}}> Purple
                </button>
                <button 
                  onClick={() => setColor("violet")}
                  className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
                  style={{backgroundColor: "violet"}}> Violet
                </button>
                <button 
                  onClick={() => setColor("skyblue")}
                  className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
                  style={{backgroundColor: "skyblue"}}> SkyBlue
                </button>
                <button 
                  onClick={() => setColor("teal")}
                  className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
                  style={{backgroundColor: "teal"}}> Teal
                </button>
                <button 
                  onClick={() => setColor("orange")}
                  className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
                  style={{backgroundColor: "orange"}}> Orange
                </button>
                <button 
                  onClick={() => setColor("cyan")}
                  className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
                  style={{backgroundColor: "cyan" }}> Cyan
                </button>
            </div>
        </div>
    </div>
    
  )
}


export default App
