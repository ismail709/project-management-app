import { ADD_PROJECT, DELETE_PROJECT, EDIT_PROJECT } from "../helpers/actionsTypes";


export const projectReducer = (state = [],action) => {
    const project = action.payload;
    switch (action.type) {
        case ADD_PROJECT:
            return [...state,project];
        case EDIT_PROJECT:
            return state.map(p => {
                if(p.id == project.id){
                    p.title = project.title;
                }
                return p;
            });
        case DELETE_PROJECT:
            return state.filter(p => p.id != project.id);
        default:
            return state;
    }
}