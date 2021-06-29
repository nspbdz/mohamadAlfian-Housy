import { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import { Badge,Button,  FormControl,  InputGroup,  Form,  Navbar,  Nav,  Col,  Row,  Image} from "react-bootstrap";
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { UserContext } from "../contexts/userContext";
import ModalSignin from "./ModalSignin";
import ModalSignup from "./ModalSignup";
import data from "../data/fakeData";

import "../styles/customStyle.css";
function Header() {

  const {state, dispatch} = useContext(UserContext);
  const [showSignUp,setshowSignUp] = useState(false);
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const handleLogout = () => {
      dispatch({
          type: "LOGOUT"
      })
  }
  
  return (
 <>
     <Navbar bg="light" variant="light">
                <Container>
                    <Nav className="me-auto">
                        <Link to="/" className="btn btn-light">Home</Link>
                        <Link to="/about" className="btn btn-light">About</Link>
                        <Link to="/product" className="btn btn-light">Product</Link>
                        <Link to="/profile" className="btn btn-light">Profile</Link>
                    </Nav>
                    <Nav className="ms-auto">
                      
                            <Button onClick={handleLogout} className="btn-sm py-0 bg-danger border-0">Logout</Button>
                      
                        <Button onClick={handleShow} className="btn-sm py-0 bg-secondary border-0">Login</Button>
                    </Nav>
                </Container>
            </Navbar>
            {/* <ModalSignin show={show} handleClose={() => setshow(false)} handleLogin={dispatch}/> */}
      {/* <ModalSignup show={showSignUp} handleClose={() => setshowSignUp(false)} handleSignUp={dispatch}/> */}

            <ModalSignin show={show} handleClose={handleClose} />
 </>
     
     
  );
};

export default Header;
