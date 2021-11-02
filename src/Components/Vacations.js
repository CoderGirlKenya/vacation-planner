import React, {Fragment, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Container from 'react-bootstrap/Container';


const Vacations = ({vacations}) => {
    const {deleteVacation} = useContext(GlobalContext);

    return (
        
            <Fragment>
                <Container>
               <h2>DESIRED TRAVEL DESTINATION</h2>
                <h3>{vacations.destination}</h3>
                <li >{vacations.outdoorsActivity}</li>
                <li >{vacations.toursActivity}</li>
                <li >{vacations.foodActivity}</li>
                <button onClick={() => deleteVacation(vacations.id)}>REMOVE ITEM</button>
                </Container>
            </Fragment>
    
    
    )
}

export default Vacations


