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
  
  function postReducer(state, action) {
    switch (action.type) {
      case "CREATE_POST":
        const newTodo = { title: action.title, description: action.description, author: action.author}
        return [newTodo, ...state];
      default:
        return state;
    }
  }
  
  export default function appReducer(state, action) {
    return {
      user: userReducer(state.user, action),
      todos: postReducer(state.todos, action),
    };
  }