
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [todo,setTodo] = useState("");
  const [todoList,setTodoList] = useState([]);
  const [id,setId] = useState(1);

  function addTodo(e)
  {
    e.preventDefault();
    setTodoList([...todoList,{id:id,title:todo}]);
    setTodo("");
    setId(id+1);
  }

  function deleteTodo(delete_id)
  {
    setTodoList(todoList.filter((item)=> item.id != delete_id))
  }
  return (
  
    <div>
      <h1>To-Do List</h1>
        <form onSubmit={addTodo}>
          <input type="text" placeholder="Enter to do" onChange={(e)=>setTodo(e.target.value)} value={todo} />
          <button type="submit">Add to do</button>
        </form>
        <ul>
          {todoList.map((item)=>{
            return(<li key={item.id}>
               {item.title}
               <button onClick={()=> deleteTodo(item.id)}>Delete</button>
            </li>);
          })}
        </ul>
    </div>
  )
}

export default App
