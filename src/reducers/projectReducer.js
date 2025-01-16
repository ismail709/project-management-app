import { ADD_PROJECT, DELETE_PROJECT, EDIT_PROJECT } from "../helpers/actionsTypes";


export const projectReducer = (state = [],action) => {
    switch (action.type) {
        case ADD_PROJECT:
            return [...state,action.payload];
        case EDIT_PROJECT:
            return state.map(project => {
                if(project.id == action.payload.id){
                    project.title = action.payload.title;
                }
            });
        case DELETE_PROJECT:
            return state.filter(project => project.id != action.payload.id);
        default:
            return state;
    }
}