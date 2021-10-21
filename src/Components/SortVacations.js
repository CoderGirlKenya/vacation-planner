import classes from "../Components/SortVacation.module.css"
import { useHistory, useLocation } from "react-router-dom";
import { Fragment } from "react";

const SortVacations = () => {
    const history = useHistory();
    const location = useLocation();

    
     const changeSortingHandler = (event) => {
         event.preventDefault();
    //     const queryParams = new URLSearchParams(location.search)

    // const isSortAscending = queryParams.get('sort')==="asc";

    // const sortVacation = sortVacations(props.vacations, isSortAscending);

    //     history.push('/vacationsItem?sort=asc')

     }
return (
    <Fragment>
    <div>
        <button className={classes.sorting} onClick={changeSortingHandler}>Sort</button>
    </div>
    </Fragment>
)
}

export default SortVacations;