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


const MyBooking = ({ match }) => {
    
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
// const splitval=pa.split("/MyBooking/")
// const urlVal=splitval[1]
console.log(pa)

const Nowss =new Date().toLocaleTimeString("en-US", {year: 'numeric', month: "long",day: "2-digit",hour: 'numeric' })
// const Nowss =new Date().toLocaleTimeString("en-US", {year: 'numeric', month: "long",day: "2-digit" })
console.log(Nowss)
//   window.location.href


  return(
    <div>
   asdasdas
  </div>
  )
}
export default MyBooking;
