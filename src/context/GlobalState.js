import React, {createContext, useReducer} from 'React';
import AppReducer from "./AppReducers";

const initialState ={
vacations : [
    {
      id:"Las Vegas",
      destination: "Las Vegas",
        outdoorsActivity:"Marvel Avengers S.T.A.T.I.O.N at Treasure Island Hotel and Casino",
        toursActivity:"Big Bus Las Vegas Hop-on Hop-off Open Top Tour",
        foodActivity:"Downtown Vegas Sightseeing and Foodie Tour",
    },
    {
      id: "New York",
      destination: "New York",
        outdoorsActivity: "Bronx Zoo",
        toursActivity: "7 Hours Boroughs Tour",
        foodActivity: "Taste of NYC Tour",
    },
    {
      id: "Denver",
      destination: "Denver",
        outdoorsActivity:"Beyond Light Show and Meditation",
        toursActivity: "Whiskey, History and Outlaws Tour",
        foodActivity: "The Dinner Detective Murder Mystery Dinner Show",
    },
  ]
} 
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value = {{
        vacations: state.vacations
    }}>
        {children}
        </GlobalContext.Provider>);
  } 

