import { useState } from 'react'
import { Link } from "react-router-dom";

export default function Todo ({ title, description, author, created, checked, finished, _id, username}) {



    return (
        <div>
            <div style={{marginBottom: 10}}>
            <Link to={`/todo/${_id}`}> <h3 style={{ color: "black" }}>{title}</h3> </Link>
            
            <small>Made by: <b>{username}</b></small>
            </div>
            <div >
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