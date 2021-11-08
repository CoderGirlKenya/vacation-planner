import React, {createContext, useReducer} from 'react';
import AppReducer from "./AppReducers";


export const GlobalContext = createContext([]);

export const GlobalProvider = (props) => {
  console.log(props)
    const [state,dispatch] = useReducer(AppReducer, {vacations: props.value.data});
//Actions that will be dispatched by the reducer
function deleteVacation(id){
  dispatch({
    type: 'DELETE_VACATION',
    payload: id, 
  })
}

function addVacation(vacation){
  dispatch({
    type: 'ADD_VACATION',
    payload: vacation, 
  })
}

    return (<GlobalContext.Provider value = {{
        vacations: state.vacations,
        deleteVacation,
        addVacation
    }}>
        {props.children}
        </GlobalContext.Provider>);
  } 

