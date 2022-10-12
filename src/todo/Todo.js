import { useState } from 'react'

export default function Todo ({ title, description, author, created, checked, finished}) {

    return (
        <div>
            <div>
                <h2>{title}</h2>
                <small>Made by: <b>{author}</b></small>
            </div>
            <div>
                <p>{description}</p>

            </div>
            <div>
                <br/>
                <small>Date Created: <b> {created} </b></small>
                <br/>
                <small>Completed?: <b>{checked ? "Yes" : "No"}</b></small>
                <br/>
                <small>Date Finished: <b>{finished}</b></small>
            </div>
        </div>
    )
}