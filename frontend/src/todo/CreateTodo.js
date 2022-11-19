import { useState, useContext, useEffect } from 'react'
//import {v4 as uuidv4} from 'uuid'

import { StateContext } from '../contexts'
import { useResource } from "react-request-hook";


import { useNavigate } from "react-router-dom";

export default function CreateTodo () {

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    //const [ uid ] = useState(uuidv4());

    const [error, setError] = useState(false);

    const {state, dispatch} = useContext(StateContext);
    const { user } = state;

    const navigate = useNavigate();

    const [todo , createTodo ] = useResource(({ title, description, author, created, checked, finished, username}) => ({
        url: '/todo',
        method: 'post',
        headers: {"Authorization": `${state.user.access_token}`},
        data: { title, description, created, checked, finished, username}
    }))
        
    
    function handleTitle (evt) { setTitle(evt.target.value) }

    function handleDescription (evt) { setDescription(evt.target.value) }


    useEffect(() => {
        if (todo?.isLoading === false && todo?.data) {
          dispatch({
            type: "CREATE_TODO",
            title: todo.data.title,
            description: todo.data.description,
            author: user.username,
            created: todo.data.created,
            checked: todo.data.checked,
            finished: todo.data.finished,
            id: todo.data._id,
            username: todo.data.username
          });

          navigate(`/`);
        }
      }, [todo]);

    
    return(
        <form onSubmit={e => {
            e.preventDefault(); 
            createTodo({title, description, author: user, created: (new Date(Date.now())).toString(), checked: false, finished: "N/A", username: user.username});

            } }>
        <div>Author: <b> {user.username}</b></div>
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