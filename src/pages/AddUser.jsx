import { useRef } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "../actions/userActions";
import { useNavigate } from "react-router";
import { store } from "../store";




export default function AddUser(){
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    // create a dispatch shortcut for store.dispatch
    // we don't have to create this function
    // we can use store.dispatch() directly
    const dispatch = (action) => store.dispatch(action);
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        // dispatch an action
        // this expression is the same as:
        /*
            dispatch(
                {
                    type:ADD_USER,
                    payload:{
                        id:Date.now(),
                        name:nameRef.current.value,
                        email:emailRef.current.value
                    }
                }
            )
        */
        dispatch(
            // the action is addUser
            // we give the user object to the action
            // it will be stored in the payload
            addUser(
                {
                    id:Date.now(),
                    name:nameRef.current.value,
                    email:emailRef.current.value
                }
            )
        );
        navigate('/');
    }
    return <>
        <form onSubmit={handleSubmit}>
            <label>name</label>
            <input ref={nameRef} type="text" />
            <label>email</label>
            <input ref={emailRef} type="text" />
            <input type="submit" value="Add user" />
        </form>
    </>
}