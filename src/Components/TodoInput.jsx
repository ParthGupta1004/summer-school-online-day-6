import { useState} from "react"
export function TodoInput({onSubmit}){
    const [newItem, setNewItem] = useState("")
    function handleSubmit(e){
    e.preventDefault()
    if (newItem === "") return
 
    onSubmit(newItem)
    setNewItem("")
}
    return(
        <>
    <form onSubmit={handleSubmit} className = "new-item-form">
        <input 
        value ={newItem}
        onChange={e => setNewItem(e.target.value)}
        type="text" 
        id="item"/>
    <button className="btn">Add</button>
    </form>
    </>
    )
}