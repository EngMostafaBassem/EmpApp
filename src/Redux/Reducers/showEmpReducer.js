
import * as actionTypes from '../Actions/actionTypes'
const showEmpReducer=(state={

    loadingState:true,
    err:null,
    result:[]
},action)=>{

    switch(action.type)
    {
        case actionTypes.FETCH_EMP_LOADING:
            return {...state,loadingState:true,err:null,result:[]}

        case actionTypes.FETCH_EMP_ERROR:
            return {...state,loadingState:false,err:action.paylaod,result:[]}
            
            
        case actionTypes.FETCH_EMP_RESULT:

        console.log('reducer')
            console.log(action.payload)

            return {...state,loadingState:false,err:null,result:action.payload} 
            
            
         default:
             return state   

    }
}
export default showEmpReducer