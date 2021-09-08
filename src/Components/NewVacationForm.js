import React,{useState} from "react";


const NewVacationForm = (props) => {
    
    const [enteredDestination, setEnteredDestination] = useState('');

    const [outdoors, setOutdoors] = useState('');

    const [tours, setTours] = useState('');

    const [food, setFood] = useState('');

     

          const destinationChangeHandler = (event) => {
              setEnteredDestination(event.target.value)
              
            };            
    
            const outdoorsChangeHandler= (event) => {
                setOutdoors(event.target.value)
            };

            const toursChangeHandler = (event) => {
                setTours(event.target.value)
            };
            
            const foodChangeHandler = (event) => {
                setFood(event.target.value)
            };

          
            const addToList = (event) => {
                event.preventDefault();
                
               const vacationData = {
                    destination: enteredDestination,
                    activityType: {outdoors: outdoors,
                                    tours: tours, 
                                    food: food,}
                }
                
                props.onSaveVacation(vacationData)

            
            
               setEnteredDestination('');
               setOutdoors('');
               setTours('');
               setFood('');
            };
             
            return (
            <div>
                <div>
                <label>DESTINATION</label>
                    <input  
                    type="text"
                     value={enteredDestination}
                     onChange={destinationChangeHandler}
                    />  
                </div>
                <div>
                    <label>OUTDOORS ACTIVITY</label>
                    <input
                     type = "text" 
                    value = {outdoors} 
                    onChange={outdoorsChangeHandler}
                   />
                   <label>TOUR ACTIVITY</label>
                    <input
                     type = "text" 
                    value = {tours} 
                    onChange={toursChangeHandler}
                   />
                   <label>FOOD ACTIVITY</label>
                    <input
                     type = "text" 
                    value = {food} 
                    onChange={foodChangeHandler}
                   />
                {/* ={()=>props.onSaveVacation(props.vacationListHandler)}
         */}
                 </div>
                <div>
                    <button type= "button" onClick={addToList} > ADD TO PLANNER </button>
                </div>
    
        </div>
            )
        
        };


export default NewVacationForm;