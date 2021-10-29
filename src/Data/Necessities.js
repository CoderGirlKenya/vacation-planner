import { Fragment } from "react";
import classes from "../Data/Necessities.module.css";

const Necessities=()=>{

    const items = [
       {
           item: "Undergarments",
           isChecked: false,
       },
       {
           item: "Outfits",
           isChecked: false,
       },
       {
           item: "Shoes",
           isChecked: false,
       },
       {
           item: "Accessories",
           isChecked: false,
       },
       {
        item: "Hair Products",
        isChecked: false,    
       },
       {
           item: "Hygiene Products",
           isChecked: false,
       },
       {
           item: "Medication",
           isChecked: false,
       },
       {
           item: "Travel Documents",
           isChecked: false,
       },
       {
           item: "Dog Sitter",
           isChecked: false,
       }
    ]

                
    return(
        <Fragment>
            <section>
            {items.map(need => (
               <li className={classes.necessities}>{need.item}
                    <input type="checkbox" value={need.item} id={need.item}/>
               </li>
            ))}
     
            </section>
            {/* <ul className={classes.header}> NECESSITIES
                <li className={classes.necessities}>Undergarments<input type = "checkbox"></input></li>
                <li  className={classes.necessities}>Outfits<input type = "checkbox"></input></li>
                <li  className={classes.necessities}>Shoes<input type = "checkbox"></input></li>
                <li className={classes.necessities} >Accessories<input type = "checkbox"></input></li>
                <li className={classes.necessities} >Hair Products<input type = "checkbox"></input></li>
                <li  className={classes.necessities}>Hygiene Products<input type = "checkbox"></input></li>
                <li className={classes.necessities} >Medication<input type = "checkbox"></input></li>      
                <li  className={classes.necessities}>Travel Documents<input type = "checkbox" ></input></li>
                <li className={classes.necessities} >Dog Sitter<input type = "checkbox"></input></li>
            </ul> */}
        </Fragment>
    )
}
export default Necessities;