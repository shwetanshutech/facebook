import React, { createContext, useContext, useReducer } from "react"; //all import

export const StateContext = createContext(); //preparing the data layer

export const StateProvider  = (
  { reducer, initialState, children } //higher order component and using to wrap our app
) => (
  //allows to provide the data laer functionality
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);
// if we pull something from the data layer we use useContext
