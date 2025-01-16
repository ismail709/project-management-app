import { useEffect, useMemo } from "react";
import { Link } from "react-router";
import { store } from "./store";


export default function App(){
  // read state from the store
  // state contain users and projects
  const {users,projects} = useMemo(() => store.getState(),[]);
  useEffect(()=>{
    // print users and projects
    console.log("users ",users)
    console.log("projects ",projects)
  })
  return <><h1>Home</h1>
  <Link to="/adduser">Add user</Link>
  </>
}