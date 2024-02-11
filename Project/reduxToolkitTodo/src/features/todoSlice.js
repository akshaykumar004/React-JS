
import { createSlice, nanoid } from "@reduxjs/toolkit";      // nanoid will generate unique id every time

// const initialState = {
//     todos: [{id: 1, text:"Hello World"}]        // this is just a object..
// }

export const todoSlice = createSlice({
    name:'todo',
    initialState: {
        // todos: [{id:nanoid(), text:"Todo List"}]         // this will show by default one todo list..
        todos: []             // giving empty array so by default no todo list will show after page loading
    },
    
    reducers : {                          // we can declare these fun seperately also just like initialState
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload            // playload is a object which will pass here text value.
            }
            state.todos.push(todo)  
        },          
        removeTodo: (state, action) => {        // state & action is a method and mandatory naming convention to use.these functions would modify the state based on the action parameter.
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },      

        // updateTodo: (state, action) => {
        //     const todoUpdate = state.todos.find((todo) => todo.id == action.payload)
        //     if (todoUpdate) {
        //         todoUpdate.text = newText;
        //       }
        // }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer



/* we've exported entire todoSlice then why explicitly exported this methods.
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

By using object destructuring, you're extracting these action creators from todoSlice.actions and assigning them to constants with the same name (addTodo, removeTodo, and updateTodo). This makes it easier to import and use these action creators elsewhere in your code.
So, after this line, you can use addTodo, removeTodo, and updateTodo as action creators to dispatch actions within your Redux application.

why this - export default todoSlice.reducer
Here, todoReducer is imported as the default export from the file where you defined your todoSlice, and it is added to the Redux store configuration under the todo key. This allows actions dispatched by your components to be handled by the todoReducer.
*/




