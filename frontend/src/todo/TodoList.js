import Todo from './Todo'
import { StateContext } from '../contexts';
import { useContext } from 'react';

import { useResource } from 'react-request-hook';

export default function TodoList () {

    const { state, dispatch } = useContext(StateContext);
    const { todos } = state;

    const [ todoDel, deleteTodo ] = useResource(({ id }) => ({
        url: `/todos/${id}`,
        method: 'delete'
        }));

    const [ todoPat, patchTodo ] = useResource(({ id, checked, finished }) => ({
        url: `/todos/${id}`,
        method: 'patch',
        data: {checked, finished}
        }));

    return (
        
        <div>
        {todos.map((p, i) => (
            <div key={p.id} style={{marginBottom: 50}}>
                <Todo {...p}  />
                <input id="check" type="checkbox" checked={p.checked} onChange={() => {
                    console.log(p.id);
                    patchTodo({id: p.id, checked: !(p.checked), finished: ((p.finished === "N/A")) ? new Date(Date.now()).toString() : "N/A"}); 
                    dispatch({type:"TOGGLE_TODO", id: p.id, checked:p.checked})
                    }}/>
                <br/>
                <input type="submit" value="delete" onClick={e => {
                    e.preventDefault(); 
                    deleteTodo({id: p.id}); 
                    dispatch({type: "DELETE_TODO", id: p.id})}}/>
            </div>
        ))}
        </div>
        
    )
}

/*
        {todos.map((p, i) => (
            <div key={p.id} style={{marginBottom: 50}}>
                <Todo {...p}  />
                <input id="check" type="checkbox" onChange={() => dispatch({type:"TOGGLE_TODO", id: p.id, checked:p.checked})}/>
                <br/>
                <input type="submit" value="delete" onClick={e => {e.preventDefault(); dispatch({type: "DELETE_TODO", id: p.id})}}/>
            </div>
        ))}
*/