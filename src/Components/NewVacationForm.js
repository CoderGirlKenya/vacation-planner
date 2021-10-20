import React,{useState} from "react";


const NewVacationForm = (props) => {
    
    const [destination, setEnteredDestination] = useState('');

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
                            id: destination,
                    destination: destination,
                       outdoorsActivity : outdoors,
                            toursActivity: tours, 
                            foodActivity: food,
                }
                
                props.onSaveVacation(vacationData)

            
            
               setEnteredDestination('');
               setOutdoors('');
               setTours('');
               setFood('');
            };
             
            return (
            <div>
            
                <label>DESTINATION</label>
                    <input  
                    type="text"
                     value={destination}
                     onChange={destinationChangeHandler}
                    />  
                
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
        
                <div>
                    <button type= "button" onClick={addToList} > ADD TO PLANNER </button>
                </div>
    
        </div>
            )
        
        };


export default NewVacationForm;