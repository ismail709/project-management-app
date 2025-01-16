import { useEffect, useMemo } from "react";
import { Link } from "react-router";
import { store } from "./store";


export default function App(){
  const users = useMemo(() => store.getState(),[]);
  useEffect(()=>{
    console.log(users)
  })
  return <><h1>Home</h1>
  <Link to="/adduser">Add user</Link>
  </>
}