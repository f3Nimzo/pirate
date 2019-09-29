import React, {createContext, useContext, useReducer} from "react";

export const StateContext = createContext();

// Create custom hook where the reducer function output is passed back into the provider,
// allowing the cart state to be accessed from all functional components
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Export a custom hook name
export const useStateValue = () => useContext(StateContext);