
import {FETCH_EMP_LOADING,FETCH_EMP_ERROR,FETCH_EMP_RESULT} from './actionTypes'
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