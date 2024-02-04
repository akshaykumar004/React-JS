import { useState } from 'react'
import './App.css'
import AddTodo from './components/addTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1 className='text-3xl text-bold font-serif mt-10'>Todo by Redux Toolkit</h1>
      <AddTodo />
      <Todos/>
      
    </>
  )
}

export default App
