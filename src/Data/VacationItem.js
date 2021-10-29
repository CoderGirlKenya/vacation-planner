import React, {useContext} from "react";
import classes from "./VacationItem.module.css";
import { Fragment } from "react";
import { GlobalContext } from "../context/GlobalState";
import Vacations from "../Components/Vacations";

const VacationItem = (props) => {
  const {vacations} = useContext(GlobalContext);

  console.log(vacations);
    




     return (
         <Fragment>
             
            <div class="card-body">
             <div className={classes.vacationItem}>
                
                {vacations.map(vacation => (<Vacations key={vacation.id} vacations={vacation}/>))}
              
        </div>
        </div>
        </Fragment>
        )

     }              
 
 
 
 export default VacationItem;
 
 