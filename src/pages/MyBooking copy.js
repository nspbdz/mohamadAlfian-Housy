import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect, useContext,img } from "react";
import data from "../data/fakeData";
import NotFound from "./NotFound";
import { UserContext } from "../contexts/userContext";
import userData from "../data/User";

import CardList from "../components/CardList";
import { FaBath,FaBed } from 'react-icons/fa';
import brand from "../assets/images/brand.svg";


import { ListGroup,Card,Jumbotron,Row,Col,Button,Container, } from "react-bootstrap";


const DetailProperty = ({ match }) => {
    
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const contextValue = useContext(UserContext);
  console.log(contextValue[0].user.name)
  const userlogin=contextValue[0].user.username
  console.log(userlogin);
  const userFilter = userData.filter(item => ( item.username === userlogin ));
  console.log(userFilter[0]);
  
const pa =window.location.pathname
const splitval=pa.split("/MyBooking/")
const urlVal=splitval[1]
console.log(splitval)

const Nowss =new Date().toLocaleTimeString("en-US", {year: 'numeric', month: "long",day: "2-digit",hour: 'numeric' })
// const Nowss =new Date().toLocaleTimeString("en-US", {year: 'numeric', month: "long",day: "2-digit" })
console.log(Nowss)
//   window.location.href


  return(
    <div>
    {data.filter(item => item.id ==urlVal).map((dataMatch,index) => {
  const FurnishedValuex=dataMatch.Furnished
  const PetValuex=dataMatch.PetAllowed
  const ShareValuex=dataMatch.SharedCommodities
  if(FurnishedValuex === true){
      var Fur="Furnished"
       }
       if(PetValuex === true){
         var Pet="Pet Allowed"
     }
     if(ShareValuex === true){
         var Share="Shared ACommodities"
     }
      
      return(
<>
                        <Row className="justify-content-md-center" style={{paddingTop:"73px"}}>
                        <Col xs lg="2">
                          1 of 3
                        </Col>
                        <Col md="auto">
                        <Row>
                        <Card style={{ width: '1035px',height:"419px"  }}>
                        <ListGroup variant="flush">
                          <ListGroup.Item>
                          <Row>
                          <Col sm={4}>
                          <img src={brand} alt="brand" />
                        


                          </Col>
                          <Col sm={3}>
                            
                          </Col>
                          <Col sm={5}>
                            <h4>Booking</h4>
                            <p>{Nowss} </p>
                          </Col>
                          </Row>

                          </ListGroup.Item>
                          <ListGroup.Item>
                          <Row>
                          <Col sm>
                          <h4>{dataMatch.name}</h4>
                        <p>{dataMatch.address}</p>
                        <Button variant="secondary">Waiting Payment</Button>
                          </Col>
                          <Col sm>
                          <Row>
                            <Col sm>status</Col>
                            <Col sm>
                              <p>Check-In</p>
                            <p>{Nowss} </p>
                            <br></br>
                            <p>Check-Out</p>
                            <p>{Nowss} </p>


                            
                            </Col>
                            <Col sm>
                              <h5>Amenities</h5>
                                  <p>{Fur}</p>
                                  <p>{Pet}</p>
                                  <p>{Share}</p>
                              
                              
                            </Col>
                          </Row>
                          </Col>
                          <Col sm>
                            <img style={{width:"138px"}} src="https://i1.wp.com/investasisyariah.info/wp-content/uploads/2018/02/Struk-Pembelian.jpg?resize=450%2C450&ssl=1" />
                          <p>Upload Payment Proof</p>
                          </Col>
                        </Row>
                          
                          <ListGroup>
                          <Row>
                          <Col sm="4">
                          <Row>
                          <Col sm="4">
                           
                          <h5>No</h5>
                            
                          </Col>
                          <Col sm="4"><h5>Full Name</h5></Col>
                          <Col sm="4"><h5>Gender</h5></Col>
                        </Row>
                            
                            
                          </Col>
                          <Col sm="4"><h5>Phone</h5></Col>
                          <Col sm="4">

                          </Col>
                        </Row>
                          </ListGroup>
                          </ListGroup.Item>
                          <ListGroup.Item>
                          <Row>
                          <Col sm={4}>
                          <Row>
                          <Col sm={4}>{dataMatch.nametof} </Col>
                          <Col sm={4}>{dataMatch.nametof} </Col>
                          <Col sm={4}>{dataMatch.nametof} </Col>
                        </Row>
                            </Col>
                          <Col sm={4}>sm=4</Col>
                          <Col sm={4}>sm=4</Col>
                        </Row>
                          </ListGroup.Item>
                        </ListGroup>
                      </Card>
                          <Col sm={4}>

                          </Col>
                          <Col sm={4}>
                            
                          </Col>
                          <Col sm={4}>
                            
                          </Col>
                        </Row>
                        
                        </Col>
                        <Col xs lg="2">
                          
                        </Col>
                      </Row>


    
</>

            
      )
        
      
    })}
  </div>
  )
}
export default DetailProperty;
