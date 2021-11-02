import React,{useState, useContext} from "react";
import classes from "./NewVacationForm.module.css";
import { GlobalContext } from '../context/GlobalState';

import { useHistory } from "react-router";
const isEmpty = value => value.trim() === '';

const NewVacationForm = () => {
    const history = useHistory();

    
    const [destination, setEnteredDestination] = useState('');

    const [outdoorsActivity, setOutdoors] = useState('');

    const [toursActivity, setTours] = useState('');

    const [foodActivity, setFood] = useState('');

    const {addVacation} = useContext(GlobalContext);
    
    const [formsInputValidity, setFormsInputValidity] = useState(false);

    const validDestination = !isEmpty(destination);
    const validOutdoorsActivity = !isEmpty(outdoorsActivity);
    const validToursActivity = !isEmpty(toursActivity)
    const validFoodActivity = !isEmpty(foodActivity)
    
                        const submitNewVacation = (event) => {
                                event.preventDefault();
                                
                                const newVacations = {
                                    id : destination,
                                    destination,
                                    outdoorsActivity, toursActivity, 
                                    foodActivity
                                }
                                    console.log(newVacations)
                            
                                    addVacation(newVacations)
                            }


                                const clickHandler = (event) => {
                                    if(validDestination && validOutdoorsActivity && validToursActivity && validFoodActivity){
                                        setFormsInputValidity()
                                        console.log(formsInputValidity)
                                    }
                                }
                // const destinationControlClasses = `${classes.control} ${formsInputValidity  ?`` : classes.invalid}`

                // const outdoorsControlClasses = `${classes.control} ${formsInputValidity.outdoorsActivity ?`` : classes.invalid}`

                // const toursControlClasses = `${classes.control} ${formsInputValidity.tours ?`` : classes.invalid}`

                // const foodControlClasses = `${classes.control} ${formsInputValidity.food ?`` : classes.invalid}`

             
            return (
                    <form onSubmit={submitNewVacation}>
            <div className={classes.backgroundImage}>
                    <div>
                <label>DESTINATION</label>
                    <input 
                     value={destination}
                    type="text"
                     onChange={(e) => setEnteredDestination(e.target.value)}
                    />  
                    {/* {!formsInputValidity && <p className={classes.notValid}>See some place new, please enter a destination</p>} */}
                    </div>
                    
                    <div>
                    <label>OUTDOORS ACTIVITY</label>
                    <input
                     type = "text" 
                    value={outdoorsActivity}
                    onChange={(e)=> setOutdoors(e.target.value)}
                   />
                   {/* {!formsInputValidity && <p className={classes.notValid}>Enjoy the outdoors, pick an activity</p>} */}
                   </div>
                   

                   <div>
                   <label>TOUR ACTIVITY</label>
                    <input
                     type = "text" 
                    value={toursActivity}               
                    onChange={(e) => setTours(e.target.value)}
                   />
                   {/* {!formsInputValidity  && <p className={classes.notValid}>Explore the destination, take a tour</p>} */}
                   </div>
                   
                   <div>
                   <label>FOOD ACTIVITY</label>
                    <input
                     type = "text" 
                    value={foodActivity}                    
                    onChange={(e) => setFood(e.target.value)}
                   />
                   {/* {!formsInputValidity && <p className={classes.notValid}>Try a native dish, add a food activity</p>} */}
               </div>
               
                {/* ={()=>props.onSaveVacation(props.vacationListHandler)}
         */}
        
                <div>
                    <button className="btn-primary" type="submit" onClick={clickHandler}> ADD TO PLANNER </button>
                </div>
    
        </div>
        </form>
            )
        
        };


export default NewVacationForm;