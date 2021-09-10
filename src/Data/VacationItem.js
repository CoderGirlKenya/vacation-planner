import React from "react";

const VacationItem = (props) => {

             const outdoors = props.outdoors;

             const tours = props.tours;

             const food = props.food;
         
             //console.log(vacationData);
     return (
         <div>
         <h1>{props.destination} </h1>
             <div>
             <input type="date" name="travelDate"/>
             <input type="date" name="travelReturnDate"/>
            <section>
             <label>OUTDOOR ACTIVITY</label>
             <ul 
             name = "activityType"
             value={outdoors} > 
                 <li>{outdoors}</li>
             </ul>
             </section>
             <section>
             <label>TOUR ACTIVITY</label>
             <ul name = "activityType" > 
                 <li>{tours}</li>
             </ul>
             </section>
             <section>
             <label>FOOD ACTIVITY</label>
             <ul name = "activityType" > 
                 <li>{food}</li>
              </ul>
             </section> 
            </div>
        </div>
)
}
                
 
 
 
 export default VacationItem;
 
 