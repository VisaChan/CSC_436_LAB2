import UserBar from "./user/UserBar";
import React, { useState, useReducer, useEffect } from 'react'
import TodoList from "./todo/TodoList";
import CreateTodo from "./todo/CreateTodo";
import {v4 as uuidv4} from 'uuid'

import appReducer from "./reducers";
import ClearFinishedTodo from "./todo/ClearFinishedTodo";

import { useResource } from "react-request-hook";
import {StateContext} from './contexts'

function App() {


  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    todos: [],
  });


  
  const [todos, getTodos] = useResource(() => ({
    url: "/todos",
    method: "get",
  }));

  useEffect(getTodos, []);

  useEffect(() => {
    if (todos && todos.data) {
      dispatch({ type: "FETCH_POSTS", todos: todos.data.reverse() });
    }
  }, [todos]);

  return (
    <div>
        <StateContext.Provider value={{state, dispatch}}>
          <UserBar  />
          <TodoList  />
          {state.user && <CreateTodo/>}

        </StateContext.Provider>
    </div>
  );
}

export default App;

//Original hard coded Todos
/*let initialTodos = [
  {
    title: "Make this Todo",
    description: "Make a default todo",
    author: "Larry David",
    created: "Thu Mar 03 1988 07:13:45 GMT-0500 (Central Daylight Time)",
    checked: false,
    finished: "N/A",
    id: uuidv4(),
  },
  {
    title: "Make Another todo",
    description: "Make another todo for later",
    author: "Anonymous",
    created: "Wed Dec 17 2003 16:22:55 GMT-0500 (Central Daylight Time)",
    checked: false,
    finished: "N/A",
    id: uuidv4(),
  }
]*/

/*
          <div style={{marginTop: 50}}>
            <ClearFinishedTodo />
          </div>
          */