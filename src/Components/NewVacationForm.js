import React,{useState} from "react";


const NewVacationForm = (props) => {
    
    const [enteredDestination, setEnteredDestination] = useState('');

    const [enteredOutdoors, setOutdoors] = useState('');

    const [enteredTours, setTours] = useState('');

    const [enteredFood, setFood] = useState('');

     

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
                            id: enteredDestination,
                    destination: enteredDestination,
                       outdoorsActivity : enteredOutdoors,
                            toursActivity: enteredTours, 
                            foodActivity: enteredFood,
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
                     value={enteredDestination}
                     onChange={destinationChangeHandler}
                    />  
                
                    <label>OUTDOORS ACTIVITY</label>
                    <input
                     type = "text" 
                    value = {enteredOutdoors} 
                    onChange={outdoorsChangeHandler}
                   />
                   <label>TOUR ACTIVITY</label>
                    <input
                     type = "text" 
                    value = {enteredTours} 
                    onChange={toursChangeHandler}
                   />
                   <label>FOOD ACTIVITY</label>
                    <input
                     type = "text" 
                    value = {enteredFood} 
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