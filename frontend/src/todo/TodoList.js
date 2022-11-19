import Todo from './Todo'
import { StateContext } from '../contexts';
import { useContext, useEffect } from 'react';

import { useResource } from 'react-request-hook';

export default function TodoList () {

    const { state, dispatch } = useContext(StateContext);
    const { todos } = state;

    const [ todoDel, deleteTodo ] = useResource(({ id }) => ({
        url: `/todo/${id}`,
        method: 'delete',
        headers: {"Authorization": `${state.user.access_token}`},
        }));    

    const [ todoPat, putTodo ] = useResource(({ id, title, description, author, created, checked, finished }) => ({
        url: `/todo/${id}`,
        method: 'put',
        headers: {"Authorization": `${state.user.access_token}`},
        data: {title, description, author, created, checked, finished},
        }));


    return (
        <div style={{marginBottom: 50}}>
            {todos.length === 0 && <h2> No posts found. </h2>}
            {todos.length > 0 && 
            todos.map((p, i) => (
                <div key={p._id} style={{marginBottom: 50}}>
                < Todo {...p} />
                <input id="check" type="checkbox" checked={p.checked} onChange={() => {
                    const upd_id = p._id;
                    const upd_check = p.checked;
                    putTodo({
                        id: upd_id, 
                        title: p.title,
                        description: p.description,
                        author: p.author,
                        created: p.created,
                        checked: !(p.checked), 
                        finished: ((p.finished === "N/A")) ? new Date(Date.now()).toString() : "N/A"}); 
                    dispatch({type:"TOGGLE_TODO", id: upd_id, checked: upd_check})
                    }}/>
                
                <br/>

                <input type="submit" value="delete" onClick={e => {
                    const del_id = p._id;
                    deleteTodo({id: del_id}); 
                    dispatch({type: "DELETE_TODO", id: del_id});

                    }}/>
                </div>    
            ))}
            
        </div>
    );
}
