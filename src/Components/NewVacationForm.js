import React,{useState, useRef} from "react";
import classes from "./NewVacationForm.css"

const isEmpty = value => value.trim() === '';

const NewVacationForm = (props) => {
    const destinationInputRef = useRef();
    const outdoorsInputRef = useRef();
    const toursInputRef = useRef();
    const foodInputRef = useRef();

    const [formsInputValidity, setFormsInputValidity] = useState({
        destination: true,
        outdoors: true,
        tours: true,
        food: true,
    })

    // const [destination, setEnteredDestination] = useState('');

    // const [outdoors, setOutdoors] = useState('');

    // const [tours, setTours] = useState('');

    // const [food, setFood] = useState('');

     

        //   const destinationChangeHandler = (event) => {
        //     //   setEnteredDestination(event.target.value)
              
        //     };            
    
        //     const outdoorsChangeHandler= (event) => {
        //         // setOutdoors(event.target.value)
        //     };

        //     const toursChangeHandler = (event) => {
        //         // setTours(event.target.value)
        //     };
            
        //     const foodChangeHandler = (event) => {
        //         // setFood(event.target.value)
        //     };

          
            const addToList = (event) => {
                event.preventDefault();
                
                const enteredDestination = destinationInputRef.current.value;
                const enteredOutdoors = outdoorsInputRef.current.value;
                const enteredTours = toursInputRef.current.value;
                const enteredFood = foodInputRef.current.value;

                const enteredDestinationIsValid = !isEmpty(enteredDestination);
                const enteredOutdoorsIsValid = !isEmpty(enteredOutdoors);
                const enteredToursIsValid = !isEmpty(enteredTours);
                const enteredFoodIsValid = !isEmpty(enteredFood);

                setFormsInputValidity({
                    destination: enteredDestinationIsValid,
                    outdoors: enteredOutdoorsIsValid,
                    tours: enteredToursIsValid,
                    food: enteredFoodIsValid,
                })
                
                const formIsValid = enteredDestinationIsValid && enteredToursIsValid && enteredOutdoorsIsValid && enteredFoodIsValid

                const destinationControlClasses = '${classes.control} ${formInputsValidty.destination ?"classes.invalid'}


                // if (!formIsValid)
                //     return 
                
                
            
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
        
             
            return (
            <div>
                    <div className={classes.destinationControlClasses}>
                <label>DESTINATION</label>
                    <input  
                    type="text"
                    //  
                    ref={destinationInputRef}
                    //  onChange={destinationChangeHandler}
                    />  
                    </div>
                    <div>
                {!formsInputValidity.destination && <p>Please enter a destination</p>}
                    <label>OUTDOORS ACTIVITY</label>
                    <input
                     type = "text" 
                    // 
                    ref={outdoorsInputRef}
                    // onChange={outdoorsChangeHandler}
                   />
                   </div>
                   <div>
               {!formsInputValidity.outdoors && <p>Enjoy the outdoors, pick an activity</p>}
                   <label>TOUR ACTIVITY</label>
                    <input
                     type = "text" 
                    // 
                    ref={toursInputRef} 
                    // onChange={toursChangeHandler}
                   />
                   </div>
                   <div>
                {!formsInputValidity.tours && <p>Explore the destination, take a tour</p>}
                   <label>FOOD ACTIVITY</label>
                    <input
                     type = "text" 
                    // 
                    ref={foodInputRef}
                    // onChange={foodChangeHandler}
                   />
            {!formsInputValidity.food && <p>Try a native dish, add a food activity</p>}
                </div>
                {/* ={()=>props.onSaveVacation(props.vacationListHandler)}
         */}
        
                <div>
                    <button type= "button" onClick={addToList} > ADD TO PLANNER </button>
                </div>
    
        </div>
            )
        
        };


export default NewVacationForm;