
import React, { useState } from "react";
import NewVacation from "./Components/NewVacation";
import {INITIAL_VACATIONS} from "./Data/VacationList";
import VacationItem from "./Data/VacationItem";
import { Route, Redirect} from "react-router-dom";
import Welcome from "./Data/Welcome";
import Necessities from "./Data/Necessities";
import { Fragment } from "react";
import Intro from "./Data/Intro";


const App =(props)=>{
  const [vacations, setNewVacations] = useState(INITIAL_VACATIONS);
  const addVacationHandler = (vacations) =>{

    setNewVacations((prevVacations) =>{
      const vacationsList=[vacations, ...prevVacations];
      console.log(vacationsList)
      return vacationsList;
    });
    
  
  };
  
    return (
        <Fragment>
          <header>
      <Welcome/>
         </header>
        <main>
        <Route path="/">
        <Redirect to="/intro"/>
        </Route>
        <Route path="/intro">
        <Intro/>
        </Route>
        <Route path="/welcome">
        <Welcome />
        </Route>
        <Route path="/newVacation">
        <NewVacation item={vacations} onAddVacation={addVacationHandler} />
        </Route>
        <Route path="/vacationItem">
        {vacations.map(vacation => (
        <VacationItem 
        key={vacation.destination}
        id={vacation.destination}
        destination={vacation.destination} 
        outdoors={vacation.outdoorsActivity}
        tours = {vacation.toursActivity}
        food = {vacation.foodActivity}
       /> 
        ))}
        </Route>
        <Route path="/necessities">
          <Necessities/>
        </Route>
        
        </main>
        </Fragment>
    )
    
};
//   return (
//     <div>
//       <h2>TRAVEL PLANNER</h2>
//       <NewVacationForm items={vacations} addToPlanner={addNewVacationHandler}/>
//       <Vacation items={vacations}></Vacation>
//       <Necessities/>
//     </div>
//   );
export default App;