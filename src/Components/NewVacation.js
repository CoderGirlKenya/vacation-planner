import React from "react";
import { INITIAL_VACATIONS } from "../Data/VacationList";
import NewVacationForm from "./NewVacationForm";

const NewVacation = (props) => {
    const onSaveVacationHandler = (enteredVacationData) =>{
        const vacationData = {
            ...enteredVacationData,
        };
        //console.log(vacationData);
        props.onAddVacation(vacationData);
    };
    return(
            <NewVacationForm key={INITIAL_VACATIONS.id} onSaveVacation={onSaveVacationHandler}/>
        
    )
}

export default NewVacation;