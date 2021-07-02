import { BasicReducerConstants } from "../actions/constants"

const initState={
    showSideBar:false,
}

const BasicReducer=(state=initState,action)=>{
    switch(action.type){
        case BasicReducerConstants.OPEN_SIDEBAR:
            state={
                ...state,
                showSideBar:true
            }
            break
        case BasicReducerConstants.CLOSE_SIDEBAR:
            state={
                ...state,
                showSideBar:false,
            }
            break;
        default:return state;
    }
    return state;
}

export default BasicReducer