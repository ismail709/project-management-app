import { useRef } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "../actions/userActions";
import { useNavigate } from "react-router";
import { store } from "../store";




export default function AddUser(){
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const dispatch = (action) => store.dispatch(action);
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        dispatch(
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