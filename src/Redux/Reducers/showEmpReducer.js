
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

       

            return {...state,loadingState:false,err:null,result:action.payload} 
            
            

         case actionTypes.ADD_EMP:
          
         const newEmp={
             employee_name:action.payload.name,
             employee_age:action.payload.age,
             employee_salary:action.payload.salary,
             id:action.payload.id
         }
         
             return {...state,loadingState:false,err:null,result:[...state.result,newEmp]}   
         default:
             return state   

    }
}
export default showEmpReducer