import { useState, useContext } from 'react'
import {v4 as uuidv4} from 'uuid'

import { StateContext } from '../contexts'
import { useResource } from "react-request-hook";

export default function CreateTodo () {

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ uid, setUid] = useState(uuidv4());

    const {state, dispatch} = useContext(StateContext);
    const { user } = state;

    const [todo , createTodo ] = useResource(({ title, description, author, created, checked, finished, id}) => ({
        url: '/todos',
        method: 'post',
        data: { title, description, author, created, checked, finished, id}
    }))
        
    
    function handleTitle (evt) { setTitle(evt.target.value) }

    function handleDescription (evt) { setDescription(evt.target.value) }
    
    return(
        <form onSubmit={e => {
            e.preventDefault(); 
            createTodo({title, description, author: user, created: (new Date(Date.now())).toString(), checked: false, finished: "N/A", id: uid});
            dispatch({ type: "CREATE_TODO", title, description, author: user, 
            created: (new Date(Date.now())).toString(), checked: false, finished: "N/A", id: uid });
            } }>
        <div>Author: <b> {user}</b></div>
        <div>
            <label htmlFor="create-title">Title:</label>
            <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
        </div>
        <textarea value={description} onChange={handleDescription}/>
        <input type="submit" value="Create" disabled={title.length === 0}/>
        </form>
    )
}


//state.todos.length + 1