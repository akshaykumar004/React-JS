import { useState } from 'react'            // this is hooks. using this we can update UI part of counter
import './App.css'

function App() {
  
let [countValue , setCountValue] = useState(0)            // here usestate accept any input like int, obj{} ,fun(), array[] or string '' etc

function addCount() {
  if(countValue < 20){
    countValue += 1
    setCountValue(countValue)
    console.log(countValue);
  }
  else {
    alert("Sorry ! You can't add count more than 20..!")
  }
  
}
const subCount = () => {                  // this is arrow function.
  if (countValue > 0) {
    countValue -= 1
    setCountValue(countValue)
    console.log(countValue);              // this is optional. you can see o/p in browser console
  }
  else {
    alert("Sorry ! You can't Sub count less than 0..!")
  }
}

  //---------------- below commented code will work only behind the scene..... In browser console.  -----------

    // let countValue = 0

    // function addCount() {
    //   countValue += 1
    //   console.log(countValue);
    // }
    
    // function subCount() {
    //   countValue -= 1
    //   console.log(countValue); 
    // }


  return (
    <>
      <h1>Counter is : {countValue}</h1>
      <button onClick={addCount}> Add Count </button> <br/> <br />
      <button onClick={subCount}> Sub Count </button>
      
    </>
  )
}

export default App

/* 
You can see addCount() and subCount() is working in behind the scene but not updating in UI.
you can see o/p in browser console. to make UI updation we have to use Hooks. it will update UI.

above we're importing useState. this will work like hooks. it accept input like int, '' , {} , [], ()

also when we store this into any variable so we declare var like this in array format - [countValue , setCountValue]
instead of setCountValue we can give any name. it is just a standard and better approach t define. In countValue we
do action and store into setCountValue. we can directly declare inside setCountValue(countValue += 1).
here as a assignment restricting countValue 0 to 20.

*/
