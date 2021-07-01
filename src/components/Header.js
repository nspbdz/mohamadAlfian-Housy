import { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import { Badge,Button,  FormControl,  InputGroup,  Form,  Navbar,  Nav,  Col,  Row,  Image} from "react-bootstrap";
import { Navbar, Nav, Container,Image, Button } from 'react-bootstrap'
import { UserContext } from "../contexts/userContext";
import ModalSignin from "./ModalSignin";
import ModalSignup from "./ModalSignup";
import data from "../data/fakeData";
import brand from "../assets/images/brand.svg";
import Drops from "../components/Drops"
import "../styles/customStyle.css";
function Header() {
  const [state, dispatch] = useContext(UserContext);
  const [showSignUp,setshowSignUp,handleSignUp] = useState(false);
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const handleLogout = () => {
      dispatch({
          type: "LOGOUT"
      })
  }
  console.log(state);
  return (
 <>
     <Navbar bg="light" variant="light">
     <Link to="/" className="navbar-brand"><img src={brand} alt="brand" />  </Link>

                <Container>
                  
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className="ms-auto">
                    {!state.isLogin 
                    ?
                    <>
                        <Button onClick={handleShow} >Login</Button>
                        <Button  onClick={() => setshowSignUp(true)} >Sign Up</Button> 
                    </>

                        :
                        
                        // <Button onClick={handleShow} className="mr-3 my-2">Logout</Button>
                      <Drops  />
                        // <Image style={{width:"50px"}} src="https://ujhw03sswsepgw3234x0qm51-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/171025-202659-Donnely-Christopher-400x400x72.jpg" roundedCircle />

                     }

                    </Nav>
                </Container>
            </Navbar>
            {/* <ModalSignin show={show} handleClose={() => setshow(false)} handleLogin={dispatch}/> */}
      {/* <ModalSignup show={showSignUp} handleClose={() => setshowSignUp(false)} handleSignUp={dispatch}/> */}

            <ModalSignin show={show} handleClose={handleClose} />
      <ModalSignup show={showSignUp} handleClose={() => setshowSignUp(false)} handleSignUp={dispatch}/>

 </>
     
     
  );
};

export default Header;