import { ADD_PROJECT, DELETE_PROJECT, EDIT_PROJECT } from "../helpers/actionsTypes";

// these are action functions for CRUD users
export const addProject = (project) => ({
    type:ADD_PROJECT,
    payload:project
})
export const editProject = (project) => ({
    type:EDIT_PROJECT,
    payload:project
})
export const deleteProject = (project) => ({
    type:DELETE_PROJECT,
    payload:project
})