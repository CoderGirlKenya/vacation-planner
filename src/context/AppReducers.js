const vacationReducer = (state, action) =>{
    switch(action.type){
        case "DELETE_VACATION":
            console.log(state);
            console.log(action);
            return {
                ...state,
                vacations: state.vacations.filter(vacation => vacation.id !== action.payload)
            }

            case "ADD_VACATION" :
            return {
                ...state,
                vacations: [action.payload, ...state.vacations]
            }
            default:
                return state ;
        }       
    }

export default vacationReducer;