import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import Vacations from "../Components/Vacations";

const VacationItem = (props) => {
  const {vacations} = useContext(GlobalContext);

  console.log(vacations);

  fetch('https://api.jsonbin.io/b/618071784a82881d6c68e66f', {
    method: 'PUT', 
    headers: {
       'Content-Type': 'application/json',
      },
       body: JSON.stringify(vacations),
       })
       .then(response =>{
           return response.json()
       }).then(data => {
           //data that we receive after adding new vacation
           console.log(data);
       })
  
    
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
 
 