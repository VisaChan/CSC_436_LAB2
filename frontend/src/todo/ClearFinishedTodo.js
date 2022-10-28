import { StateContext } from '../contexts';
import { useContext } from "react";

export default function ClearFinishedTodo(){

    const { dispatch } = useContext(StateContext);

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