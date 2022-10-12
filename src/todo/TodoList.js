import Todo from './Todo'

export default function TodoList ({todos = [], dispatch}) {
    return (
        <div>
        {todos.map((p, i) => (
            <div key={p.id}>
                <Todo {...p}  />
                <input id="check" type="checkbox" onChange={() => dispatch({type:"TOGGLE_TODO", id: p.id, checked:p.checked})}/>
                <br/>
                <input type="submit" value="delete" onClick={e => {e.preventDefault(); dispatch({type: "DELETE_TODO", id: p.id})}}/>
            </div>
        ))}
        </div>
        
    )
}
//onChange={dispatch({type: "TOGGLE_TODO", id: p.id, checked:false, finished:"N/A"})}}