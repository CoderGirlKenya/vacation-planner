import React,{useState} from "react";


const NewVacationForm = (props) => {
    // const [vacations, setAddVacation] = useState(INITAL_VACATIONS);
    const [enteredDestination, setEnteredDestination] = useState('');

    const [enteredActivity, setEnteredActivity] = useState('');
    
    const [activityTypeObj,setActivityType]= useState("");

    const activityTypeArray = ["OUTDOORS", "TOURS", "FOOD"];

          const destinationChangeHandler = (event) => {
              setEnteredDestination(event.target.value)
              
            };            
    
        const activityChangeHandler = (event) => {
            setEnteredActivity(event.target.value)
             };
        
            const activityTypeChangeHandler = (event) =>{
                setActivityType(event.target.value)
            };
        
            const addToList = (event) => {
                event.preventDefault();
                
               const vacationData = {
                    id : Math.random().toString(),
                    destination: enteredDestination,
                    activityType: {activityTypeObj: [enteredActivity]}
                }
                
                props.onSaveVacation(vacationData)
            
               setEnteredDestination('');
               setActivityType('');
               setEnteredActivity('');
            };
             
            return (
            <div>
                <div>
                <label>DESTINATION</label>
                    <input  
                    type = "text"
                     value = {enteredDestination}
                     onChange = {destinationChangeHandler}
                    //  key={Math.random().toString()}
                    />  
                </div>
                <div>
                
                <select 
                onChange={activityTypeChangeHandler} 
                value={activityTypeObj}
                // key={Math.random().toString()}
                >
                <option>SELECT ACTIVITY TYPE</option> */
                {activityTypeArray.map((activityType,index) => (
                <option >{activityType}</option> 
                ))} 
                </select>
                    <input
                     type = "text" 
                    value = {enteredActivity} 
                    onChange={activityChangeHandler}
                    // key={Math.random().toString()} 
                   />
                {/* ={()=>props.onSaveVacation(props.vacationListHandler)}
         */}
                 </div>
                <div>
                    <button type= "button" onClick={addToList}> ADD TO PLANNER </button>
                </div>
    
        </div>
            )
        
        };


export default NewVacationForm;