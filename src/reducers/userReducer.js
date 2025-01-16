import { ADD_USER, DELETE_USER, EDIT_USER } from "../helpers/actionsTypes";


// user reducer
export const userReducer = (state = [],action) => {
    // get the user from the payload
    const user = action.payload;
    // check action type
    switch (action.type) {
        // action add user
        case ADD_USER:
            return [...state,user];
        // action edit user 
        case EDIT_USER:
            return state.map(u => {
                if(u.id == user.id){
                    u.name = user.name
                    u.email = user.email
                }
                return u;
            });
        // action delete user
        case DELETE_USER:
            return state.filter(u => u.id != user.id)
        // if action is unknown don't change the state
        default:
            return state;
    }
}