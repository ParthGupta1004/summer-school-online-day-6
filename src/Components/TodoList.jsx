import {TodoItem} from "./TodoItem"
export function TodoList({todos, toggleTodo, deleteTodo}){
    return(
        <>
        <div className="new-list">
    <ul>
        {todos.map(todo =>{
            return(
                <TodoItem 
                {...todo} 
                key={todo.id} 
                toggleTodo={toggleTodo} 
                deleteTodo={deleteTodo} 
                />
        )
        })}
    </ul>
    </div>
        </>
    )
}