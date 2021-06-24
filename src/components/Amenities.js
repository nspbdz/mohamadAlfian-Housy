import { InputGroup,FormControl,Row,Col,Form } from "react-bootstrap";
import React from 'react';

class Amenities extends React.Component {
    constructor(){
        super();

    }
    render(){
      

        return (
            <>
    
        <p className="h3 text-left font-weight-bold">Property Room</p> 
         <Row>
            <Col sm><p className=""> Furnished</p></Col>
            <Col sm></Col>
            <Col sm>   
            <Form.Check aria-label="option 1" />
            </Col>
        </Row>

        <Row>
            <Col sm><p className=""> Furnished</p></Col>
            <Col sm></Col>
            <Col sm>   
            <Form.Check aria-label="option 1" />
            </Col>
        </Row>

        <Row>
            <Col sm><p className=""> Furnished</p></Col>
            <Col sm></Col>
            <Col sm>   
            <Form.Check aria-label="option 1" />
            </Col>
        </Row>

            </>

        )
    }
}
  
  export default Amenities;
