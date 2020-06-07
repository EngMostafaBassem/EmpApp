import React from 'react'

import {Route,Redirect,Switch} from 'react-router-dom'
import ShowEmp from './Show/ShowEmp'
import FormEmp from './Form/FormEmp'
const Main=()=>{

    return(
        <div>
           <Switch>
               <Route  path="/Show" component={()=><ShowEmp/>} />
               <Route  path="/Add"  component={()=><FormEmp/>} />
               <Route  path="/employees/:empName"  component={()=><FormEmp/>} />
               <Redirect to="/Show"/>
           </Switch>
        </div>
    )
}
export default Main