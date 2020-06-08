
import React, { useEffect } from 'react'
import {useSelector, shallowEqual} from 'react-redux'
import {Container,Row,Col, Button,Alert} from 'reactstrap'
import {Link} from 'react-router-dom'
import './ShowEmp.scss'
import Loading from '../Loading'

const ShowEmp=()=>{

 const empData=useSelector(state=>state.showEmpReducer,shallowEqual)
 



    
    return(
        <div>

     




            <div className="add-btn">
             <Link to="/Add">
            <i class="fa fa-plus fa-4x"  ></i>
            </Link>
            </div>
        <Container className="mt-5">
          <Row>
          {
              empData.loadingState?<Loading/>:
               empData.result.map(item=>
               
                <Col xs={12} className="m-2 pointer" key={item.id}>
                    <Link to={`employees/${item.employee_name}`}>
                <Button  outline color="secondary">
                  
                   {item.employee_name}
                    
                </Button>

                </Link>
            </Col>
               
               
               
                )
           }

            
          </Row>
        </Container>
           
        </div>
    )
}
export default ShowEmp