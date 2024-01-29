import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {

    const [todo, setTodo] = useState("")        // this todo state is for individual todo msg..
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if(!todo) return

        addTodo({todo, completed:false})  // here giving all value of todos bcz in app.jsx appTodo is written in obj so to spread the values 
        setTodo("")          // of this we're giving value which needs to spread since id is already defined in appTodo() so not giving here.
    }                      //  also we can ignore todo as a key. we can give only todo as value bcz both key:value name is same..
    
    return (
        <form  className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

