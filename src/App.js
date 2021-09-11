
import React, { useState } from "react";
import NewVacation from "./Components/NewVacation";
import {INITIAL_VACATIONS} from "./Data/VacationList";
import VacationItem from "./Data/VacationItem";

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
        <form>
        <div>
        <NewVacation items={vacations} onAddVacation={addVacationHandler}/>
        </div>
        <div>
        {vacations.map(vacation => (
        <VacationItem 
        key={Math.random().toString()}
        id={vacation.id}
        destination={vacation.destination} 
        outdoors={vacation.outdoors}
        tours = {vacation.tours}
        food = {vacation.food}
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