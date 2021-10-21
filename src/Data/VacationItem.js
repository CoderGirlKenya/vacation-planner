import React from "react";
import classes from "../Data/VacationItem.module.css"
import { Fragment } from "react";
import SortVacations from "../Components/SortVacations";

const VacationItem = (props) => {

    




     return (
         <Fragment>
             <div  className={classes.background}>
             <SortVacations/>
             </div>
             <section>
             <div className={classes.vacationItem}>
         <h1 value={props.destination}>{props.destination} </h1>
             <div>
             <input type="date" name="travelDate"/>
             <input type="date" name="travelReturnDate"/>
            </div>
             <label>OUTDOOR ACTIVITY</label>
             <ul 
             name = "activityType"
             value={props.outdoors} > 
                 <li value={props.outdoors}>{props.outdoors}</li>
             </ul>
             <label>TOUR ACTIVITY</label>
             <ul name = "activityType" > 
                 <li value={props.tours}>{props.tours}</li>
             </ul>
        
             <label>FOOD ACTIVITY</label>
             <ul name = "activityType" > 
                 <li value={props.food}>{props.food}</li>
              </ul>
        </div>
        </section>
        </Fragment>
)

     }              
 
 
 
 export default VacationItem;
 
 