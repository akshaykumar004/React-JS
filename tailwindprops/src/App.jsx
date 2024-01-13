import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './component/Card'

function App() {

  let chai = {
    name: "chai",
    price: 20
  }

  let coffee = {
    name: "coffee",
    price: 40
  }

  let year = [2 , 0 , 2 , 4]

  return (
    <>
      <h2 className='text-yellow-500 rounded-xxl mb-4'>Tailwind CSS</h2>

    {/* below code - figure tag is taken from tilwind.css site first home page. just for example of tailwind css- https://tailwindcss.com/ */}
      
      {/* <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="C:\Users\77079\OneDrive\Desktop\IMG20221222143718.jpg" alt="" width="384" height="512" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Sarah Dayan
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure> */}



      {/*---------------------------Props ---------------*/}

      {/* <div class="relative h-[300px] w-[200px] rounded-md">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="AirMax Pro"
          class="z-0 h-full w-full rounded-md object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"> </div>
        <div class="absolute bottom-4 left-4 text-left">
          <h1 class="text-lg font-semibold text-white">Delba </h1>
          <p class="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
            View Profile →
          </button>
        </div>
      </div> */}

      <Card username="Delba" btnText = "View Profile" /> <br />     

    {/*  <Card name="chai" & obj = {name:"coffee"} /> <br />       /* we cant pass value like this  */} 

      <Card obj = {chai} username="Tanya"  btnText = "Visit Me" /> <br />
      <Card arr = {year} username="Akshay" btnText = "Click Me" /> 
     

    </>
  )
}

export default App


/* Image src="/sarah-dayan.jpg" is not loading bcz it is not in our pc. and when we're trying to give local img then getting error 
  like Not allowed to load local resource due to security reasons.

putting figure tag in comments for understnading Props.
putting card into comments. make a componet folder and inside that in Card.jsx file put this code.

now if you want to pass different-2 value inside your card then you've to use props. props will do this.
for this we've to declare props in card.jsx which will accept any value when we'll pass during calling like in app.jsx
in browser console you can see this props are working but is empty. so we need to give some value so we'll pass into second card
now after passing value we can see o/p in browser console. it is taking but can we pass multiple type of value inside card directly? 
No we can't. for this we have to give value inside variable means first we have to assign data in an variable and then call that variable.

*/
