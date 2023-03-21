import { createContext, useReducer } from "react";
import { USER_ACTION_TYPES } from "./action-types";



const INITIAL_STATE = {
    currentUser: {
        usename:null,
        email:null,
        id:null
    }
};

export const UserContext =createContext(INITIAL_STATE);

const userReducer = (state,action) => {
    const {type,payload}  = action;
    switch(type) {
        case USER_ACTION_TYPES.SET_USER : 
            return {
                currentUser : {...payload}
            };
        default : 
            return state;
    }
};

export const UserContextProvider = ({children}) =>{
    const [{currentUser},dispatchUser] = useReducer(userReducer,INITIAL_STATE);

    function addUser (user) {
        dispatchUser({type:USER_ACTION_TYPES.SET_USER , payload:user})
    };

    const value={currentUser,addUser};

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}