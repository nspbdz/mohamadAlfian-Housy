import {Row,Form,Col,Button } from "react-bootstrap";
import React from 'react';
import "../styles/customBtn.css";

class Budget extends React.Component {
    constructor(){
        super();
    }
    render(){
   

        return (
            <>
        <p className="h3 text-left font-weight-bold">Budget</p>

            <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="4 ">
                Less Than IDR.
                </Form.Label>
                <Col sm="8">
                <Form.Control style={{width:"237px"}} />
                </Col>
            </Form.Group>
            </Form>

            <Row>
            <Col sm></Col>
            <Col sm></Col>
            <Col sm>   
            <Button className="justic=fy" variant="primary" type="submit">
                Apply
            </Button>
            </Col>
        </Row>
           
            </>

        )
    }
}
  
  export default Budget;
