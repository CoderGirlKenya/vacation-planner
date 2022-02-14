import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import Vacations from "../Components/Vacations";

const VacationItem = (props) => {
  const {vacations} = useContext(GlobalContext);

  console.log(vacations);

  Document.getElementById("v").addEventListener("submit", addNewItem);
    
     return (
         <div>        
           {/* dynamically displays global variable data    
            displays alls vacations   */}
                {vacations.map(vacation => (<Vacations key={vacation.id} vacations={vacation}
         />
         ))}
         </div>
        )

     }              
 
 
 
 export default VacationItem;
 
 