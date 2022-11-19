function userReducer(state, action) {
    switch (action.type) {
      case "LOGIN":
      case "REGISTER":
        return {
          username: action.username,
          access_token: action.access_token,
        };
      case "LOGOUT":
        return null;
      default:
        return state;
    }
  }
  
  function todoReducer(state, action) {
    switch (action.type) {
      case "CREATE_TODO":
        const newTodo = { title: action.title, description: action.description, author: action.author, 
          created: action.created, checked: action.checked, finished: action.finished, _id: action.id, username: action.username}
        return [newTodo, ...state];
      case "DELETE_TODO":
        return state.filter((item) => item._id !== action.id);
      case "TOGGLE_TODO":
        const newList = state.map((item) => {
          if(item._id === action.id){
            const toggledItem = {...item, checked: !item.checked, finished: ((item.finished === "N/A")) ? new Date(Date.now()).toString() : "N/A"};
            return toggledItem;
          }
          return item;
        })
        return newList;
      case "CLEAR_FINISHED_TODO":
        return state.filter((item) => item.checked !== true);
      case "FETCH_POSTS":
        return action.todos;
      case "CLEAR_TODOS":
        return [];
      default:
        return state;
    }
  }
  
  export default function appReducer(state, action) {
    return {
      user: userReducer(state.user, action),
      todos: todoReducer(state.todos, action),
    };
  }