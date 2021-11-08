import React, {Fragment, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Container from 'react-bootstrap/Container';
import classes from './Vacations.module.css'

const Vacations = ({vacations}) => {
    const {deleteVacation} = useContext(GlobalContext);

    return (
        
            <Fragment>
                <div className={classes.vacations}>
                <Container>
               <h2>DESIRED TRAVEL DESTINATION</h2>
                <h3>{vacations.destination}</h3>
                <li >{vacations.outdoorsActivity}</li>
                <li >{vacations.toursActivity}</li>
                <li >{vacations.foodActivity}</li>
                <button onClick={() => deleteVacation(vacations.id)}>REMOVE ITEM</button>
                </Container>
                </div>
            </Fragment>
    
    
    )
}

export default Vacations


