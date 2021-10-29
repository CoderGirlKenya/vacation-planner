import React, {Fragment, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';



const Vacations = ({vacations}) => {
    const {deleteVacation} = useContext(GlobalContext);

    return (
        
            <Fragment>
                <section class="container">
               <h2>DESIRED TRAVEL DESTINATION</h2>
                <h3>{vacations.destination}</h3>
                <li class='list-inline'>{vacations.outdoorsActivity}</li>
                <li class='list-inline'>{vacations.toursActivity}</li>
                <li class='list-inline'>{vacations.foodActivity}</li>
                <button onClick={() => deleteVacation(vacations.id)}>REMOVE ITEM</button>
                </section>
            </Fragment>
    
    
    )
}

export default Vacations


