//access data from json file storage in json storage bin file
import React, {useEffect, useState, Suspense } from "react";
import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Welcome from "./Data/Welcome";
import Intro from "./Data/Intro";
import { GlobalProvider } from "./context/GlobalState";

//automatically loads the bundle containing component when it is first rendered
//Must be rendered inside Suspense component which allows fallback actions.
// Fallbacks render any react element while the component loads
//May want to add error boundaries to allow other components to load if one fails

const RenderApi = React.lazy(() => import('./MapApi/RenderApi'));
const NewVacationForm = React.lazy(() => import('./Components/NewVacationForm'));
const VacationItem = React.lazy(() => import('./Data/VacationItem'));
const Necessities = React.lazy(() => import('./Data/Necessities'));


const App =()=>{
  //UseState returns variable with current state value or initial set value and another function to update that value
const [data, setData] = useState();
const [error, setError] = useState();
const [loading, setloading] = useState(true);

console.log(data);
//UseEffect - function that handles actions when something affects component
//allows other component functions to run 
    useEffect(() => {
      //fetch sends a request to endpoint as argument and returns a promise(response)
      //asychronous does not interrupt other functions in component
      fetch("https://api.jsonbin.io/b/618071784a82881d6c68e66f",{
        //required parameters to access endpoint
        headers:{
          'x-master-key':'$2b$10$iujLbiHUNNKEv6DqUG.AG.P90tn1SgbUBMiz8bwDhdAhaZYRcSxy2'
        }
        })
        //handles response (synchronous and asynchronous) errors
        //
      .then(response =>{
        if(response.ok){
          //json method converts response to a form that can be use by javascript
          console.log(response);
          return response.json();
        }
        //generates an exception and will throw response then try to catch error. If no error then
        throw response;
      }) 
      //attaches callback for resolution or rejection of data. 
      //if resolved sets data as value for data variable
      .then(data =>{
        setData(data)
      })
      //executes if promise is rejected
      .catch(error => {
        console.log('error fetching data')
        setError(error)
      })
      //sets loading state once promise is either accepted or rejected
      .finally(()=> {
        setloading(false)
      })
    }, [])
    if(loading){
      return 'Your vacation planner is loading'
    }
    
    if(error){
      return 'error'
    }

    
      
  
    return (
      <Router>
      <Switch>
        <GlobalProvider value={{data, loading, error}}>
          <header>
        <Welcome/>
         </header>
        <main>
        <Route path="/" exact>
          <Intro/>
        </Route>
        <Route path="/intro">
        <Intro/>
        </Route>
        <Route path="/welcome">
        <Welcome />
        </Route>
         <Suspense fallback={<p>Loading.....</p>}>
        <Route path="/renderapi">
        <RenderApi/>
        </Route>
        <Route path="/newVacationForm">
        <NewVacationForm/>
        </Route>
        <Route path="/vacationItem">
        <VacationItem/>
        </Route>
        <Route path="/necessities">
          <Necessities/>
        </Route>
       </Suspense> 
         </main>
        </GlobalProvider>
        </Switch>
        </Router>
      )
    
};

export default App;