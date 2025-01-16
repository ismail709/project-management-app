import { ADD_USER, DELETE_USER, EDIT_USER } from "../helpers/actionsTypes";


export const userReducer = (state = [],action) => {
    const user = action.payload;
    switch (action.type) {
        case ADD_USER:
            return [...state,user];
        case EDIT_USER:
            return state.map(u => {
                if(u.id == user.id){
                    u.name = user.name
                    u.email = user.email
                }
            });
        case DELETE_USER:
            return state.filter(u => u.id != user.id)
        default:
            return state;
    }
}