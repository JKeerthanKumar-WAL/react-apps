import{useState} from "react";
function Todos(){
    let [todo, setTodo] = useState([]);
    function addTodo(event){
        event.preventDefault();
        let formTag = event.target;
        let inputTag = formTag.todo;
        let newTodo = [...todo, inputTag.value]
        setTodo(newTodo);
    }
    function clearAll(){
        setTodo([]);
    }
    return(
        <div className="App-div">
            <h1>Todo App</h1>
            <form onSubmit={addTodo}>
                <input type="text" name="todo" /><br /><br />
                <button>Add Todo</button><br /><br />
            </form>
            <button onClick={clearAll}>Clear All</button><br /><br />
            <div className="wrap">
                {todo.map(function(val, index){
                    return <div className="divone"><b>{val}</b></div>
                })}
            </div>
        </div>
    )
}
export default Todos;