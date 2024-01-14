import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length , setLength] = useState(6)
  const [numCheck , setnumCheck] = useState(false)
  const [charCheck , setcharCheck] = useState(false)
  const [password , setPassword] = useState("")


  //useRef hook   -- used to take reference of any element
  const passwordRef = useRef(null)

  //useCallback(fn , []) hook   // useCallBack accept one fun() and dependencies on which you want to callback
  
  const passwordGenerator = useCallback(() => {
    let pswrd = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numCheck) {              // if numCheck is true add this number into str
      str += '0123456789'
    }
    if(charCheck) str += "!@#$%&.?"         // if charCheck is true add this special char into str

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pswrd += str.charAt(char)
      console.log(pswrd);
    }
    setPassword(pswrd)
    
  } , [length , numCheck , charCheck , setPassword])


    const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();                     // will check current password has any value or not then select password
    passwordRef.current?.setSelectionRange(0, 10);     // this will select range of password.
    window.navigator.clipboard.writeText(password)     // this will copy password into clipboard
    document.querySelector('#copyButton').style.backgroundColor = "green"
    document.querySelector('#msg').innerHTML = "Copied..!"  // after copying password this will show Copied..1
    //alert('Copied..!')
    
    }, [password])

  //useEffect(fn , []) hook   // useEffect accept one fun() and dependencies..

  useEffect(() => {
    passwordGenerator()
  } , [length , numCheck , charCheck , passwordGenerator])

  return (
    <>
      <div id='msg'></div>    
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-2xl text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button
              id='copyButton'
              onClick={copyPasswordToClipboard}
              className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'> Copy
            </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={6}
              max={10}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numCheck}
              id="numberInput"
              onChange={() => {
                setnumCheck((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charCheck}
              id="charInput"
              onChange={() => {
                setcharCheck((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Character</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
