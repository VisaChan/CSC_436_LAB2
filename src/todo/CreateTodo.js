import { useState } from 'react'

export default function CreateTodo ({user, todos, dispatch}) {

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
        
    function handleTitle (evt) { setTitle(evt.target.value) }

    function handleDescription (evt) { setDescription(evt.target.value) }
    

    return(
        <form onSubmit={e => {
            e.preventDefault(); 
            dispatch({ type: "CREATE_POST", title, description, author: user });
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


