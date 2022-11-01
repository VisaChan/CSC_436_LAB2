import { useState, useContext, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'

import { StateContext } from '../contexts'
import { useResource } from "react-request-hook";

export default function CreateTodo () {

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ uid ] = useState(uuidv4());

    const [error, setError] = useState(false);

    const {state, dispatch} = useContext(StateContext);
    const { user } = state;

    const [todo , createTodo ] = useResource(({ title, description, author, created, checked, finished}) => ({
        url: '/todos',
        method: 'post',
        data: { title, description, author, created, checked, finished}
    }))
        
    
    function handleTitle (evt) { setTitle(evt.target.value) }

    function handleDescription (evt) { setDescription(evt.target.value) }


    useEffect(() => {
        if (todo?.error) {
          setError(true);
          //alert("Something went wrong creating post.");
        }
        if (todo?.isLoading === false && todo?.data) {
          dispatch({
            type: "CREATE_TODO",
            title: todo.data.title,
            description: todo.data.description,
            author: todo.data.author,
            created: todo.data.created,
            checked: todo.data.checked,
            finished: todo.data.finished,
            id: todo.data.id,
          });
        }
      }, [todo]);

    
    return(
        <form onSubmit={e => {
            e.preventDefault(); 
            createTodo({title, description, author: user, created: (new Date(Date.now())).toString(), checked: false, finished: "N/A"});

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

//            dispatch({ type: "CREATE_TODO", title, description, author: user, 
//created: (new Date(Date.now())).toString(), checked: false, finished: "N/A", id: uid });