import React from "react";
import classes from "../Data/VacationItem.module.css"
import { Fragment } from "react";
import SortVacations from "../Components/SortVacations";

const VacationItem = (props) => {

    




     return (
         <Fragment>
             
            <div className={classes.entire}>
             <div className={classes.vacationItem}>
         <h1 value={props.destination}>{props.destination} </h1>
             
             <input type="date" name="travelDate"/>
             <input type="date" name="travelReturnDate"/>
        <ul>
             <label>OUTDOOR ACTIVITY</label>
            <li name="activitytype" value={props.outdoors}>{props.outdoors}</li>
             
             <label>TOUR ACTIVITY</label>
             <li value={props.tours}>{props.tours}</li>
             
        
             <label>FOOD ACTIVITY</label>
            <li value={props.food}>{props.food}</li>
              </ul>

              <button>REMOVE ITEM</button>
              <button>DELETE ITEM</button>
              <button>BOOK VACATION</button>
        </div>
        </div>
        </Fragment>
)

     }              
 
 
 
 export default VacationItem;
 
 