import { ADDINJURY,UPDATEINJURY,FINDALLINJURIES,FINDINJURY,DELETEINJURY } from "../action/action";



const reducer=(state=[],action)=>{
    switch(action.type){
            case ADDINJURY:
                state=[...action.payload]
            return state
            case FINDINJURY:
            return state
            case UPDATEINJURY:
            return state
            case DELETEINJURY:
            return state
            case FINDALLINJURIES:
                state=[...action.payload]
            return state
    }
    }
    export default reducer
    