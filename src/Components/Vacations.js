import React, {Fragment, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';



const Vacations = ({vacations}) => {
    const {deleteVacation} = useContext(GlobalContext);

    return (
        
            <Fragment>
            
                <ul>
               <label>DESIRED TRAVEL DESTINATION</label>
                <h1>{vacations.destination}</h1>
                <li>{vacations.outdoorsActivity}</li>
                <li>{vacations.toursActivity}</li>
                <li>{vacations.foodActivity}</li>
                <button onClick={() => deleteVacation(vacations.id)}>REMOVE ITEM</button>
                </ul>
            </Fragment>
    
    
    )
}

export default Vacations


