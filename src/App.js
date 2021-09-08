
import React, { useState } from "react";
import NewVacation from "./Components/NewVacation";
import {INITIAL_VACATIONS} from "./Data/VacationList";
import VacationItem from "./Data/VacationItem";

const App =(props)=>{
  const [vacations, setNewVacations] = useState(INITIAL_VACATIONS);
  const addVacationHandler = (vacations) =>{
    setNewVacations((prevVacations) =>{
      return [vacations, ...prevVacations];
    });
    console.log(vacations)
  };
  
    return (
        <form>
        <div>
        <NewVacation items={vacations} onAddVacation={addVacationHandler}/>
        </div>
        <div>
        {INITIAL_VACATIONS.map(vacations => (
        <VacationItem 
        key={Math.random().toString()}
        id={vacations.id}
        destination={vacations.destination} 
        outdoors={vacations.activityType.outdoors}
        tours = {vacations.activityType.tours}
        food = {vacations.activityType.food}
       />
        ))} 
        
        </div>
        </form>
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