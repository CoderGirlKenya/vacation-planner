import React from "react";
import classes from "../Data/VacationItem.module.css"

const VacationItem = (props) => {

     return (
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
)
}
                
 
 
 
 export default VacationItem;
 
 