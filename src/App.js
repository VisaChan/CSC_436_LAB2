import UserBar from "./user/UserBar";
import { useState, useReducer } from 'react'
import TodoList from "./todo/TodoList";
import CreateTodo from "./todo/CreateTodo";

import appReducer from "./reducers";

function App() {

  let initialTodo = [
    {
      title: "Make this",
      description: "Make a default todo",
      author: "Me",
    },
    {
      title: "Make Another",
      description: "Make another todo",
      author: "Me",
    }
  ]

  const [state, dispatch] = useReducer(appReducer, {
    user: "Barry",
    todos: initialTodo,
  });

  return (
    <div>
        <UserBar user={state.user} dispatch={dispatch} />
        <TodoList todos={state.todos} />
        {state.user && <CreateTodo user={state.user} todos={state.todos} dispatch={dispatch}/>}
    </div>
  );
}

export default App;
