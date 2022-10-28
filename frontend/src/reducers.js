function userReducer(state, action) {
    switch (action.type) {
      case "LOGIN":
      case "REGISTER":
        return action.username;
      case "LOGOUT":
        return "";
      default:
        return state;
    }
  }
  
  function todoReducer(state, action) {
    switch (action.type) {
      case "CREATE_TODO":
        const newTodo = { title: action.title, description: action.description, author: action.author, 
          created: action.created, checked: action.checked, finished: action.finished, id: action.id}
        return [newTodo, ...state];
      case "DELETE_TODO":
        return state.filter((item) => item.id !== action.id);
      case "TOGGLE_TODO":
        console.log(action.id);
        const newList = state.map((item) => {
          if(item.id === action.id){
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