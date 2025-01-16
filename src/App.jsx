import { useEffect, useMemo } from "react";
import { Link } from "react-router";
import { store } from "./store";


export default function App(){
  const {users,projects} = useMemo(() => store.getState(),[]);
  useEffect(()=>{
    console.log("users ",users)
    console.log("projects ",projects)
  })
  return <><h1>Home</h1>
  <Link to="/adduser">Add user</Link>
  </>
}