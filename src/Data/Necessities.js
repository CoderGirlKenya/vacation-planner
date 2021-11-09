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
    const removeItem = (id) => {
        const newList = items.filter(item => item.id !== id)
     
        setItems(newList);
    }
                
    return(
        <Fragment>
            <section>
             {items.map(need => ( 
               <li  key={need.item} className={classes.necessities}>{need.item}
                    <button  onClick={() => removeItem(need.id)} type="checkbox">Item Packed</button>
               </li>
            ))} 
     
            </section>
        </Fragment>
    )
}
export default Necessities;