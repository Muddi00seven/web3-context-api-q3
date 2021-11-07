import React, { createContext, useReducer, useContext, useEffect } from 'react';
import AppReducer from '../store/appReducer'
import { loadBlockchain } from '../store/asyncAction'
const initialState = {
    transactions: [],
    web3: null,
    accounts: [],
    contract: null,
    web3LoadingErrorMessage: "",
    web3Loadded: false
}



// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        loadBlockchain(dispatch)
    }, [])

    return (<GlobalContext.Provider value={[state, dispatch]}>
        {children}
    </GlobalContext.Provider>);
}

export const useStore = () => useContext(GlobalContext);