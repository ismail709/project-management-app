import { ADD_USER, DELETE_USER, EDIT_USER } from "../helpers/actionsTypes";

// these are action functions for CRUD users
export const addUser = (user) => ({
    type:ADD_USER,
    payload:user
})
export const editUser = (user) => ({
    type:EDIT_USER,
    payload:user
})
export const deleteUser = (user) => ({
    type:DELETE_USER,
    payload:user
})