
import {FETCH_EMP_LOADING,FETCH_EMP_ERROR,FETCH_EMP_RESULT,ADD_EMP} from './actionTypes'

import axios from 'axios'

 export const FetchEmp=()=>dispatch=>{
 
    dispatch(fetch_emp_loading())
    axios.get('http://dummy.restapiexample.com/api/v1/employees').
    then(data=>dispatch(fetch_emp_result([...data.data.data]))).
    catch(err=> dispatch(fetch_emp_error(err)))
    
}
export const fetch_emp_error=(err)=>({type:FETCH_EMP_ERROR,payload:err})
export const fetch_emp_loading=()=>({type:FETCH_EMP_LOADING})
export const fetch_emp_result=(data)=>({type:FETCH_EMP_RESULT,payload:data})



export const POST_EMP=(data)=>dispatch=>{

    axios.post('http://dummy.restapiexample.com/api/v1/create',data).
    then(data=>dispatch(ADDEMP({...data.data.data}))).
    catch(err=>console.log(err))
}

export const ADDEMP=(data)=>({type:ADD_EMP,payload:data})