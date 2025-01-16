import { useRef } from "react"
import { useNavigate } from "react-router";
import { store } from "../store";
import { addProject } from "../actions/projectActions";




export default function AddProject(){
    const titleRef = useRef(null);
    // create a dispatch shortcut for store.dispatch
    // we don't have to create this function
    // we can use store.dispatch() directly
    const dispatch = (action) => store.dispatch(action);
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        // dispatch an action
        dispatch(
            // the action is addProject
            // we give the project object to the action
            // it will be stored in the payload
            addProject(
                {
                    id:Date.now(),
                    title:titleRef.current.title
                }
            )
        );
        navigate('/');
    }
    return <>
        <form onSubmit={handleSubmit}>
            <label>title</label>
            <input ref={titleRef} type="text" />
            <input type="submit" value="Add project" />
        </form>
    </>
}