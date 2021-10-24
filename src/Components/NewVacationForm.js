import React,{useState, useRef, useEffect} from "react";
import classes from "./NewVacationForm.module.css"

const getLocalStorage = () =>{
    let vacations= localStorage.getItem("vacations");
    if(vacations){
        return (vacations =JSON.parse(localStorage.getItem("vacations")));
    } else {
        return [];
    }

};

const isEmpty = value => value.trim() === '';

const NewVacationForm = (props) => {
    const [vacations,setVacations] = useState(getLocalStorage());
    const [formIsValid, setFormIsValid] = useState(false)
    const destinationInputRef = useRef(props.destination);
    const outdoorsInputRef = useRef(props.outdoors);
    const toursInputRef = useRef(props.tours);
    const foodInputRef = useRef(props.food);

    useEffect (() =>{
        localStorage.setItem("vacations", JSON.stringify(vacations))
    }, [vacations])

    const [formsInputValidity, setFormsInputValidity] = useState({
        destination: true,
        outdoors: true,
        tours: true,
        food: true,
    });

    
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

                console.log(enteredDestination);
                console.log(enteredOutdoors);
                console.log(enteredTours);
                console.log(enteredFood);

                const enteredDestinationIsValid = !isEmpty(enteredDestination);
                const enteredOutdoorsIsValid = !isEmpty(enteredOutdoors);
                const enteredToursIsValid = !isEmpty(enteredTours);
                const enteredFoodIsValid = !isEmpty(enteredFood);

                setFormsInputValidity({
                    destination: enteredDestinationIsValid,
                    outdoorsActivity: enteredOutdoorsIsValid,
                    toursActivity: enteredToursIsValid,
                    foodActivity: enteredFoodIsValid,
                });

                if(formIsValid === enteredDestinationIsValid && enteredToursIsValid && enteredOutdoorsIsValid && enteredFoodIsValid){
                    setVacations(
                        vacations.map((vacation) =>{
                            return{...vacation, vacations}
                        })
                    )
                } 
            }

                
                    

                const destinationControlClasses = `${classes.control} ${formsInputValidity.destination ?`` : classes.invalid}`

                const outdoorsControlClasses = `${classes.control} ${formsInputValidity.outdoors ?`` : classes.invalid}`

                const toursControlClasses = `${classes.control} ${formsInputValidity.tours ?`` : classes.invalid}`

                const foodControlClasses = `${classes.control} ${formsInputValidity.food ?`` : classes.invalid}`
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
            <div className={classes.backgroundImage}>
                    <div className={destinationControlClasses}>
                <label>DESTINATION</label>
                    <input 
                     
                    type="text"
                    //  
                    ref={destinationInputRef}
                    //  onChange={destinationChangeHandler}
                    />  
                    </div>
                    {!formsInputValidity.destination && <p>Please enter a destination</p>}

                    <div className={outdoorsControlClasses}>
                    <label>OUTDOORS ACTIVITY</label>
                    <input
                     type = "text" 
                    // 
                    ref={outdoorsInputRef}
                    // onChange={outdoorsChangeHandler}
                   />
                   </div>
                   {!formsInputValidity.outdoors && <p>Enjoy the outdoors, pick an activity</p>}

                   <div className={toursControlClasses}>
                   <label>TOUR ACTIVITY</label>
                    <input
                     type = "text" 
                    // 
                    ref={toursInputRef} 
                    // onChange={toursChangeHandler}
                   />
                   </div>
                   {!formsInputValidity.tours && <p>Explore the destination, take a tour</p>}

                   <div className={foodControlClasses}>
                   <label>FOOD ACTIVITY</label>
                    <input
                     type = "text" 
                    // 
                    ref={foodInputRef}
                    // onChange={foodChangeHandler}
                   />
               </div>
               {!formsInputValidity.food && <p>Try a native dish, add a food activity</p>}
                {/* ={()=>props.onSaveVacation(props.vacationListHandler)}
         */}
        
                <div>
                    <button type= "button" onClick={addToList} > ADD TO PLANNER </button>
                </div>
    
        </div>
            )
        
        };


export default NewVacationForm;