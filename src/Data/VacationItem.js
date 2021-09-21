import React from "react";

const VacationItem = (props) => {

            //  const outdoors = props.outdoors;

            //  const tours = props.tours;

            //  const food = props.food;
         
             //console.log(vacationData);
     return (
         <div>
         <h1 value={props.destination}>{props.destination} </h1>
             
             <input type="date" name="travelDate"/>
             <input type="date" name="travelReturnDate"/>

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
 
 