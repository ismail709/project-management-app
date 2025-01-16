import { ADD_USER, DELETE_USER, EDIT_USER } from "../helpers/actionsTypes";


export const userReducer = (state = [],action) => {
    switch (action.type) {
        case ADD_USER:
            return [...state,action.payload];
        case EDIT_USER:
            return state.map(user => {
                if(user.id == action.payload.id){
                    user.name = action.payload.name
                    user.email = action.payload.email
                }
            });
        case DELETE_USER:
            return state.filter(user => user.id != action.payload.userId)
        default:
            return state;
    }
}