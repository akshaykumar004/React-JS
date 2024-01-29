import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'


function App() {
  const [todos, setTodos] = useState([])    // we'll use this state as empty so that we can pass value.

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(),...todo},...prev])   // see below to understand functionality
  }
  const updateTodo = (id,todo) => {
    setTodos((prev) => prev.map((prevTodomsg) => (prevTodomsg.id === id ? todo : prevTodomsg)))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos( (prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo , completed: !prevTodo.completed}: prevTodo))
  }

  //-------------------Getting value from Local storage -----------

  useEffect ( () => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0) {
      setTodos(todos)
    }
  } , [])


  //------------- Setting value in Local storage ----------------------

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <h1 className="text-2xl font-bold bg-slate-400">TODO at Local Storage Using Context API</h1>

      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>

              <div className="mb-4">
                        {/* Todo form goes here */} 
                        < TodoForm />
              </div>

              <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}

                        {todos.map((todo) => (
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo} />
                          </div>
                        ))}
              </div>

          </div>

      </div>
    </TodoProvider>
  )
}

export default App


/* addTodo ------ setTodos((prev) => [{id: Date.now(),...todomsg},...prev]) ------------- here we're declaring todomsg value in setTodos object..
so if we'll give direct todomsg then it will delete all previoous todomsg and add only recent one. so avoid this issue
we're using prev as to add prev todomsg also then recent one.. and for this we need id so that each todomsg will update accordingly
so using random id for this using Date.now() means current date as id of todomsg.. and passing this all in array so that it will add
in array which we defined in above useState...

updateTodo ------- doing looping on prevTodomsg so that it will check each id of prevTodomsg and if it matches then new todomsg will create else prevTodomsg.

deleteTodo ------- this will filter todomsg by id if it is matches then it will delete else will return in array

toggleTodo ------ running loop and once id will match toggleComplete value will be true. else will be false.

*/
