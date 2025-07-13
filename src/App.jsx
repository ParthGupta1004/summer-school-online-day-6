import { useState } from "react"
import './index.css';
import { TodoInput } from "./Components/todoInput"
import { TodoList } from "./Components/TodoList"
export default function App() {
  const [todos, setTodos] = useState([])

  function addTodo(title){
    setTodos(currentTodos =>{
      return[
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false},
      ]
    })
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos =>{
      return currentTodos.map(todo =>{
        if(todo.id === id){
          return { ...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos =>{
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  return (
    <>
    <h1 className="header">Todo List</h1>
    <TodoInput onSubmit={addTodo} />
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </> 
  )
}