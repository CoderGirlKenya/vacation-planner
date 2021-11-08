import { Fragment, useState} from "react";
import classes from "../Data/Necessities.module.css";


const Necessities=()=>{

    const [items, setItems] = useState(
    [
       {
           id: "Undergarments",
           item: "Undergarments",
       },
       {
           id: "Outfits",
           item: "Outfits",
       },
       {
           id: "Shoes",
           item: "Shoes",
       },
       {
           id: "Accessories",
           item: "Accessories",
       },
       {
        id: "Hair Products",
        item: "Hair Products",    
       },
       {
           id: "Hygiene Products", 
           item: "Hygiene Products",
       },
       {
           id: "Medication",
           item: "Medication",
       },
       {
           id: "Travel Documents",
           item: "Travel Documents",
       },
       {
           id: "Dog Sitter",
           item: "Dog Sitter",
       }
    ]
    )

    const checkedItems = [];

    const removeItem = (event, id) => {
     items.splice(id, 1);
     setItems(items.map(need =>{
         //console.log(need)
            return need
     }))
    }

                
    return(
        <Fragment>
            <section>
             {items.map(need => ( 
               <li  key={need.item} className={classes.necessities}>{need.item}
                    <button  onClick={() => removeItem(need.id)} type="checkbox"> Delete Item</button>
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