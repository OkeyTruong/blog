import { createContext, useReducer } from "react"
import Reducer from "./Reducer";

const INITIAL_SATE = {
    user:null,
    isFetching:false,
    error:false,
}

export const Context = createContext()

export const ContextProvider = ({children}) =>{
    console.log(children);
    const [state,dispatch] = useReducer(Reducer, INITIAL_SATE);

    return(
        <Context.Provider value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch
        }}>
            {children}
        </Context.Provider>
    )

}