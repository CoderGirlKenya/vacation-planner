import React from "react";


const VacationItem = (props) => {
    
             
         
             //console.log(vacationData);
     return (
         <div>
         <h1>{props.destination} </h1>
             <div>
             <input type="date" name="travelDate"/>
             <input type="date" name="travelReturnDate"/>
             <select name = "outdoors" >
                 <option value = ''> Select OutDoor Activities</option> 
                 {props.activityType.outdoors.map((outdoorsType,index) =>  
                 <option 
                 value={index} key={Math.random().toString()}
                 > {outdoorsType}
                 </option>                 )}
                 {/* <option value = "1" > {props.type.outdoors[0]} </option>
                  <option value = "2" > {props.type.outdoors[1]} </option>
                 <option value = "3" > {props.type.outdoors[2]} </option>  */}
             </select>
             
             </div>
             <div >
                <select name = "tours" >
                 <option value = ''>Select Tours</option>
                 {props.activityType.tours.map((toursType,index) =>  
                 <option value={index} key={Math.random().toString()}> {toursType}</option>
                 )} 
                  {/* <option value = "1">{props.type.tours[0]}</option>
                 <option value = "2">{props.type.tours[1]}</option>
                 <option value = "3">{props.type.tours[2]}</option>  */}
                 </select>
             </div>
             <div>
                 <select name = "food">
                 <option value = ''>Select Food Activities</option>
                 {props.activityType.food.map((foodType,index) => 
                 <option value={index} key={Math.random().toString()}> {foodType}</option>  
                  )} 
                 {/* <option value = "1">{props.type.food[0]}</option>
                 <option value = "2">{props.type.food[1]}</option>
                 <option value = "3">{props.type.food[2]}</option>  */}
                 </select>
             </div>
             <button>READY TO CONQUER VACATION</button>
             </div>
             
     )
         }
 
 
 
 export default VacationItem;
 
 