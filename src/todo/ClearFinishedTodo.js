export default function ClearFinishedTodo({dispatch}){

    return (
        <form
        onSubmit = {(e) => {e.preventDefault();
            dispatch({type: "CLEAR_FINISHED_TODO"});
        }}
        >
           <input type="submit" value="Clear Finished Todos" /> 
        </form>
    );

}