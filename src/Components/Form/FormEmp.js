
import React, { useEffect , useState} from 'react'
import {useParams} from 'react-router-dom'
import {LocalForm,Control,Errors} from 'react-redux-form'
import {Label,FormGroup,Container,Row,Col, Button} from 'reactstrap'
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
const FormEmp=(props)=>{
    const history=useHistory()
const params=useParams()

const formSubmit=(values)=>{
    console.log(values)
    history.goBack()
}
const requiredStr=(val) => val && val.length;
const ageCheck=(val)=>val&&val>15
const empData=useSelector(state=>state.showEmpReducer)
 const [empInfo,setImpInfo]=useState({employee_name:'',employee_salary:'',employee_age:''})
useEffect(()=>{

    if(params.empName)
    {
        const obj=empData.result.find(item=>item.employee_name===params.empName)
     
        const {employee_name,employee_salary,employee_age}=obj
      
        setImpInfo({employee_name,employee_salary,employee_age})


    }
   

},[])

    return(
        <div>
          <LocalForm  className="form" onSubmit={(values)=>formSubmit(values)}>
                <FormGroup>
                    <Container>

                    <Row>
                      <Col xs={8}>
                      <Label for="name">Name</Label>
                       <Control.text 
                     
                       id="name" 
                       name="name"
                       model=".name"  
                       className="form-control" 
                       placeholder="Enter Your Name"
                       validators={{
                        requiredStr:requiredStr,
                       
                       }}
                       value={params.empName?empInfo.employee_name
                        
                        :null}
                       
                       /> 
                       <Errors
                       className="text-danger"
                       model=".name"
                       show="touched"
                       messages={{
                        requiredStr:'Please,Type name'

                       }}
                       
                       />
                      </Col>      
                    </Row>


                    <Row>
                      <Col xs={4}>
                      <Label for="age">Age</Label>
                      <Control.text 
                       id="age" 
                       name="age"
                       model=".age"  
                       className="form-control" 
                       placeholder="Enter Your Age"
                       validators={
                           {
                            ageCheck
                           }
                       }

                       value={params.empName?empInfo.employee_age
                        
                        :null}
                       
                       /> 



                        <Errors
                       className="text-danger"
                       model=".age"
                       show="touched"
                       messages={{
                        ageCheck:'Age should be greater than 15'

                       }}
                       
                       />
                      </Col>    



                       <Col xs={4}>
                      <Label for="salary">Salary</Label>
                       <Control.text
                          id="salary"
                          name="salary"
                          model=".salary"  
                          className="form-control" 
                          placeholder="Enter Your Salary"
                          
                          value={params.empName?empInfo.employee_salary
                        
                            :null}
                           
                          
                          
                          /> 
                      </Col>      
                    </Row>

                    <Row className={params.empName?'d-none':'d-block mt-2'} >
                        <Col xs={12}>
                        
                        <Button outline color="secondary">Submit</Button>
                        </Col>
                    </Row>


                    </Container>
                </FormGroup>
              
          </LocalForm>
        </div>
    )
}
export default FormEmp