import UserBar from "./user/UserBar";
import { useReducer } from 'react'
import TodoList from "./todo/TodoList";
import CreateTodo from "./todo/CreateTodo";
import {v4 as uuidv4} from 'uuid'

import appReducer from "./reducers";
import ClearFinishedTodo from "./todo/ClearFinishedTodo";

function App() {

  let initialTodos = [
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
  ]

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    todos: initialTodos,
  });

  return (
    <div>
        <UserBar user={state.user} dispatch={dispatch} />
        <TodoList todos={state.todos} dispatch={dispatch} />
        {state.user && <CreateTodo user={state.user} dispatch={dispatch}/>}
        <div style={{marginTop: 50}}>
          <ClearFinishedTodo dispatch={dispatch} />
        </div>
        
    </div>
  );
}

export default App;
