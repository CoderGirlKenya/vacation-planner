import { Fragment } from "react";
import classes from "../Data/Necessities.module.css";

const Necessities=()=>{
    
    return(
        <Fragment>
            <ul className={classes.header}> NECESSITIES
                <li className={classes.necessities}>Undergarments<input type = "checkbox"></input></li>
                <li  className={classes.necessities}>Outfits<input type = "checkbox"></input></li>
                <li  className={classes.necessities}>Shoes<input type = "checkbox"></input></li>
                <li className={classes.necessities} >Accessories<input type = "checkbox"></input></li>
                <li className={classes.necessities} >Hair Products<input type = "checkbox"></input></li>
                <li  className={classes.necessities}>Hygiene Products<input type = "checkbox"></input></li>
                <li className={classes.necessities} >Medication<input type = "checkbox"></input></li>      
                <li  className={classes.necessities}>Travel Documents<input type = "checkbox" ></input></li>
                <li className={classes.necessities} >Dog Sitter<input type = "checkbox"></input></li>
            </ul>
        </Fragment>
    )
}
export default Necessities;