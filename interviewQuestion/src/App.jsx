import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  function addCount(){

    // this will not update every time bcz usestate will use this as batch bcz it has same functionality so it will send to react in batch.

    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)

    // but this will work bcz here we're updating count value each time and then at last we're giving setCount()

    // count = count + 1
    // count = count + 1
    // count = count + 1
    // setCount(count)
    
    // Using callback fun() we update setCount() direclty upto 3 times. bcz fun() will call and update count and then again it will call so...

    setCount((count) => count + 1)    // this is arrow fun().not using {} otherwise we've to give return
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    
  }
  function reduceCount(){
    count = count - 1
    setCount(count)
  }

  return (
    <>
      <h1>Counter is : {count} </h1>

      <button onClick={addCount}>Add Count</button> <br /><br />
      <button onClick={reduceCount}>Reduce Count</button>
      
    </>
  )
}

export default App


/* Qeustion is if we repeat setCount(count+1) three/multiple times then it will update the count value 3 times or only once

exp - setCount(count + 1)
      setCount(count + 1)
      setCount(count + 1)

      here setcount(count+1) repeating three times so will it give value direct 3 or only 1.

Ans is No.. It will update only once.

When we write setCounter(counter+1) multiple times it is updated only once because in the onclick handler of that render, 
even after calling setCounter(counter + 1) multiple times the value of the counter is 0, because after our event handler finishes, 
then React re-renders the component. 

the reason why the first code didn't work as aspected is because if there are multiple setstate() having same functionality then react will 
batch(means group) this updates and queue them first,then process it accordingly and react will update all the values in the next render.
The reason react does this is for performance optimization because if our component renders after each update then it's not really good performance
wise so react will batch these updates and just perform one render.

As react's new reconcilation engine is Fibre. And according to Fibre ,the updates are always done in batches .But in order to achieve ans=3
we have to propogate the states properly using previous counter variable

value of counter will not change with function calling multiple times. As counter itself is not changing, if counter++ or counter+=1 will be
the case then the values in each of the function will change. but in this case, it should remain same.

but in below case we're updating every time count value and giving at last setCount() so it will update 3 times.

count = count + 1
count = count + 1
count = count + 1
setCount(count)


but if you want to update value 3 times using setCount only then we've to use callback fun().then it update every time and will give result at last

setCount((count) => count + 1)    // here {} is not using bcz we've to give return value..
setCount((count) => count + 1)
setCount((count) => count + 1)

this will work as expected. cz fun() will call and fetch the count value and will update. and again it will call and update and so on

so as many time you call fun() it will update count value and return.. it will not work like batch..

*/