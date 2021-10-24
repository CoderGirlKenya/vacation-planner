import React,{useState, useRef} from "react";


const NewVacationForm = (props) => {
    const destinationInputRef = useRef();
    const outdoorsInputRef = useRef();
    const toursInputRef = useRef();
    const foodInputRef = useRef();

    // const [destination, setEnteredDestination] = useState('');

    // const [outdoors, setOutdoors] = useState('');

    // const [tours, setTours] = useState('');

    // const [food, setFood] = useState('');

     

          const destinationChangeHandler = (event) => {
            //   setEnteredDestination(event.target.value)
              
            };            
    
            const outdoorsChangeHandler= (event) => {
                // setOutdoors(event.target.value)
            };

            const toursChangeHandler = (event) => {
                // setTours(event.target.value)
            };
            
            const foodChangeHandler = (event) => {
                // setFood(event.target.value)
            };

          
            const addToList = (event) => {
                event.preventDefault();
                
            //    const vacationData = {
            //                 id: destination,
            //         destination: destination,
            //            outdoorsActivity : outdoors,
            //                 toursActivity: tours, 
            //                 foodActivity: food,
            //     }
                
                // props.onSaveVacation(vacationData)

            
            
            //    setEnteredDestination('');
            //    setOutdoors('');
            //    setTours('');
            //    setFood('');
            };
             
            return (
            <div>
            
                <label>DESTINATION</label>
                    <input  
                    type="text"
                    //  
                    ref={destinationInputRef}
                     onChange={destinationChangeHandler}
                    />  
                
                    <label>OUTDOORS ACTIVITY</label>
                    <input
                     type = "text" 
                    // 
                    ref={outdoorsInputRef}
                    onChange={outdoorsChangeHandler}
                   />
                   <label>TOUR ACTIVITY</label>
                    <input
                     type = "text" 
                    // 
                    ref={toursInputRef} 
                    onChange={toursChangeHandler}
                   />
                   <label>FOOD ACTIVITY</label>
                    <input
                     type = "text" 
                    // 
                    ref={foodInputRef}
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