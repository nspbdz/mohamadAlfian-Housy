import {React} from "react"
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";

import {Dropdown} from "react-bootstrap"
import { useContext,useState } from "react"
import {UserContext} from "../contexts/userContext";
import userData from "../data/User";
import { Card,Jumbotron,Row,Col,Button,DropdownButton,Image } from "react-bootstrap";
import { BsPeopleCircle,BsEnvelope,BsLock,BsFillHouseFill,BsGeoAlt } from 'react-icons/bs';
import { FaTransgender,FaPhone } from 'react-icons/fa';
import ModalChangePassword from '../components/ModalChangePassword'
// import userData from '../data/User'
import Profile from "../pages/Profile";

function Drops(){
//   const {state} = useContext(UserContext);
//   const [state, dispatch] = useContext(UserContext);
//   const handleLogout(){
//     const [data, setData] = useState({
//         username: "", 
//         password: "",
//       });
//   }
const [state, dispatch] = useContext(UserContext);
console.log(state.isLogin)
const logouts = () => {
    dispatch(false)
    // dispatch({isLogin: false,  });
};

  const contextValue = useContext(UserContext);
  console.log(contextValue[0].user.name)
  const userlogin=contextValue[0].user.username
  console.log(userlogin);
  console.log(state);


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // <p className='h2'>{contextValue[0].user.name}</p>

  const userFilter = userData.filter(item => ( item.username === userlogin ));
  console.log(userFilter);
  console.log(userData);
  
//   const [appUserConfig, setAppUserConfig] = useContext(UserContext);
//   const logout = () => {
//       setAppUserConfig({});
//   };

    return (
        <> 
<div>
 <Dropdown>
  <Dropdown.Toggle style={{backgroundColor:"transparent",border:'none'}} id="dropdown-basic" >
 <Image style={{width:"50px"}} src="https://ujhw03sswsepgw3234x0qm51-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/171025-202659-Donnely-Christopher-400x400x72.jpg" roundedCircle />

  </Dropdown.Toggle>

  <Dropdown.Menu>

    <Dropdown.Item >
    <Link to="/profile" className="btn btn-light">profile</Link>
        </Dropdown.Item>
        <Dropdown.Item >
    <Link to="/MyBooking" className="btn btn-light">MyBooking</Link>
        </Dropdown.Item>
        <Dropdown.Item >
    <Link to="/MyBookingHistory" className="btn btn-light">MyBookingHistory</Link>
        </Dropdown.Item>
        
    <Dropdown.Divider />
    <Dropdown.Item >
    <Link to="/" onClick={logouts} className="btn btn-light">Logout</Link>
        </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
        </>
    )
}
export default Drops;
