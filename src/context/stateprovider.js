import React, { createContext, useContext, useReducer} from "react"

export const StateContext = createContext()

export default function StateProvider({ initialState, reducer, children }) {
    return(
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateProviderValue = () => useContext(StateContext)