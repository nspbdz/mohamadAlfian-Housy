import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/userContext";
import ModalSignin from "../components/ModalSignin";
import { useHistory,Router,Link } from "react-router-dom";

// import { Row, Col } from "react-bootstrap";
import data from "../data/fakeData";
import NotFound from "./NotFound";
import CardList from "../components/CardList";
import { FaBath,FaBed } from 'react-icons/fa';


import { Card,Jumbotron,Row,Col,Button,Container } from "react-bootstrap";


const DetailProperty = ({ match }) => {
  const [state, dispatch] = useContext(UserContext);

  const [showSignUp,setshowSignUp,handleSignUp] = useState(false);
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleBook = () => setShow(true);

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
const pa =window.location.pathname
const splitval=pa.split("/detailProperty/")
const urlVal=splitval[1]
console.log(urlVal)



//   window.location.href


  return(
    <div>
    {data.filter(item => item.id ==urlVal).map(dataMatch => (
      
<>
                        <Row className="justify-content-md-center">
                        <Col xs lg="4">
                            
                        </Col>
                        <Col md="auto" style={{ paddingBottom:"12px"}}>
                            
              <img src={dataMatch.img1} style={{width:"1018px",height:"400.16px",paddingTop:"50px"}} alt="brand" />
                       
                        <Row style={{paddingBottom:"40px"}}>

                        <Col sm="4">
              <img src={dataMatch.img1} style={{width:"320px",height:"160.16px",paddingTop:"12px"}} alt="brand" />

                        </Col>
                        <Col sm="4">
              <img src={dataMatch.img1} style={{width:"320px",height:"160.16px",paddingTop:"12px"}} alt="brand" />

                        </Col>
                        <Col sm="4">
              <img src={dataMatch.img1} style={{width:"320px",height:"160.16px",paddingTop:"12px"}} alt="brand" />

                        </Col>


                        </Row>

                        <h1>{dataMatch.name}</h1>

                        <Row>
                            <Col sm="4">
                        <h4>Rp. {dataMatch.price}/Year</h4>
                        <p>{dataMatch.address}</p>

                            </Col>

                            <Col sm="4">        </Col>


                            <Col sm="4">
                                <Row>
                                    <Col sm="4">
                                    
                            <p>Bedroom</p>
                            <p> {dataMatch.bedroom} <FaBed/> </p>
                                    </Col>
                                    <Col sm="4">
                                        
                            <p>Bathroom</p>
                            <p> {dataMatch.bathroom} <FaBath/> </p>
                                    </Col>
                                    <Col sm="4">
                                        
                            <p>Area</p>
                            <p> {dataMatch.area} Ft </p>
                                    </Col>
                                    </Row>
                               
                            
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col sm="4">
                        <h4>Description</h4>

                            </Col>

                            <Col sm="4">        </Col>


                            <Col sm="4">

                            </Col>
                            
                            
                        </Row>
                        

                        </Col>

                       
                        <Col xs lg="4">
                            
                        </Col>
                        </Row>

                        <h4 className="text-center"> {dataMatch.description}</h4>
                        <Row>
                        <Col sm></Col>
                        <Col sm></Col>
                           {!state.isLogin ?
                    
                    <Col sm>
                        <Button onClick={handleShow} style={{width:"213px",marginBlockEnd:"20px"}}>Book Now</Button>
                        </Col>

                        :

                        <Link to={{
                            // id:item.id,
                            pathname: `/MyBooking/${urlVal}`
                          }} >
                        <Col sm><Button onClick={handleBook} style={{width:"213px"}}>Book Now</Button></Col>
                        
                        </Link>
                     }
            <ModalSignin show={show} handleClose={handleClose} />

                        {/* <Col sm><Button style={{width:"213px"}}>Book Now</Button></Col> */}
                        </Row> 

    
</>

            

        
      
    ))}
  </div>
  )
}
export default DetailProperty;
