import React,{useState} from "react";


const NewVacationForm = (props) => {
    // const [vacations, setAddVacation] = useState(INITAL_VACATIONS);
    const [enteredDestination, setEnteredDestination] = useState('');

    const [enteredActivity, setEnteredActivity] = useState('');
    
    const [activityType,setActivityType]= useState('');

    const activityTypeArray = ["OUTDOORS", "TOURS", "FOOD"];

     

          const destinationChangeHandler = (event) => {
              setEnteredDestination(event.target.value)
              
            };            
    
        const activityChangeHandler = (event) => {
            setEnteredActivity(event.target.value)
             };
        
            const activityTypeChangeHandler = (event) => {
                setActivityType(event.target.value)
                
                const {
                    target: {activityType, value}
                    }= event

                    this.setState({[activityType]: value})
                };
            

          
            const addToList = (event) => {
                event.preventDefault();
            
            
                                
               const vacationData = {
                    destination: enteredDestination,
                    activityType: {[activityType]:enteredActivity}
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
                    type="text"
                     value={enteredDestination}
                     onChange={destinationChangeHandler}
                    />  
                </div>
                <div>
                
                <select 
                onChange={activityTypeChangeHandler} 
                value={activityType}
                key={Math.random().toString()}
                >
                <option>SELECT ACTIVITY TYPE</option> */
                {activityTypeArray.map((activityType,index) => (
                <option key={Math.random().toString()}>{activityType}</option> 
                ))} 
                </select>
                    <input
                     type = "text" 
                    value = {enteredActivity} 
                    onChange={activityChangeHandler}
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