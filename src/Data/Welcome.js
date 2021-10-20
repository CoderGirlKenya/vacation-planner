import { NavLink } from "react-router-dom";
import classes from "../Data/Welcome.module.css";

const Welcome = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                    <NavLink activeClassName={classes.active}
                    to="newVacation">New Vacation</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active}
                        to="vacationItem">Vacations</NavLink>
                    </li>
                    <li>
                    <NavLink activeClassName={classes.active}
                    to="necessities">Necessities</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Welcome;