import { createContext, useReducer, useState } from "react";
import { Theme_ACTION_TYPES } from "./action-types";


const INITIAL_STATE = {
    isDark:false
}
export const DarkModeContext = createContext(INITIAL_STATE );


const darkModeReducer =(state,action)=> {
    const {type} = action;
    switch(type) {
        case Theme_ACTION_TYPES.DARK_MODE :
            return {
                isDark : true
            };
        case Theme_ACTION_TYPES.LIGHT_MODE :
            return {
                isDark : false
            };
        case Theme_ACTION_TYPES.TOGGLE : 
            return {
                isDark : !state.isDark
            };
        default :
        return;
    }
};

export const DarkModeContextProvider =({children}) =>{

    const [{isDark},dispatchTheme] = useReducer(darkModeReducer,INITIAL_STATE);

    function setDark (status) {
        dispatchTheme({type: status})
    };
    
    const value ={isDark,setDark};
    
        return <DarkModeContext.Provider value={value}>
            {children}
        </DarkModeContext.Provider>
}