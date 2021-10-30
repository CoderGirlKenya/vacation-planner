
import React, { useState } from "react";
import VacationItem from "./Data/VacationItem";
import { Route, Redirect, BrowserRouter} from "react-router-dom";
import Welcome from "./Data/Welcome";
import Necessities from "./Data/Necessities";
import NewVacationForm from "./Components/NewVacationForm";

import Intro from "./Data/Intro";

import { GlobalProvider } from "./context/GlobalState";

const App =()=>{
  // const [vacations, setNewVacations] = useState([]);
  // const addVacationHandler = (vacations) =>{

  //   setNewVacations((prevVacations) =>{
  //     const vacationsList=[vacations, ...prevVacations];
  //     console.log(vacationsList)
  //     return vacationsList;
  //   });
    
  

  
    return (
      <BrowserRouter>
        <GlobalProvider>
          <header>
        <Welcome/>
         </header>
        <main>
        <Route path="/" exact>
          <Intro/>
        </Route>
        <Route path="/intro">
        <Intro/>
        </Route>
        <Route path="/vacations" exact>
        <Redirect to="/vacationItem"/>
        </Route>
        <Route path="/welcome">
        <Welcome />
        </Route>
        <Route path="/newVacationForm" exact>
        <NewVacationForm/>
        </Route>
        <Route path="/vacationItem">
        <VacationItem/>
        </Route>
        <Route path="/necessities">
          <Necessities/>
        </Route>
        
        </main>
        </GlobalProvider>
        </BrowserRouter>
      )
    
};

export default App;