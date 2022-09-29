import { useState } from 'react'

export default function Todo ({ title, description, author}) {

    const [checked, setChecked] = useState(false)

    const handleCheck = () => {
        setChecked(!checked)
    }

    return (
        <div>     
            <h3>{title}</h3>
            <p>Created by: <b>{author}</b></p>
            <p>{description}</p>
            <p>Completed?: <b>{checked ? "Yes" : "No"}</b></p>
            <br />
            <input id="check" type="checkbox" checked={checked} onChange={handleCheck}/>
        </div>
    )
}