import React, {useContext} from "react";
import { Fragment } from "react";
import { GlobalContext } from "../context/GlobalState";
import Vacations from "../Components/Vacations";

const VacationItem = (props) => {
  const {vacations} = useContext(GlobalContext);

  console.log(vacations);
    




     return (
         <Fragment>
             
      
                
                {vacations.map(vacation => (<Vacations key={vacation.id} vacations={vacation}
                  />))}
              
        </Fragment>
        )

     }              
 
 
 
 export default VacationItem;
 
 