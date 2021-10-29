export default (state, action) =>{
    switch(action.type){
        case "DELETE_VACATION":
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
