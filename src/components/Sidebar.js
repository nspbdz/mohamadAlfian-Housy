import { ListGroup } from "react-bootstrap";
import TypeRent from "./TypeRent"
import Date from "./Date"
import PropertyRoom from "./Bedroom"
import Bathroom from "./Bathroom";
import Amenities from "./Amenities";
import Budget from "./Budget";
const Sidebar = () => {
  return (
    <>
    <TypeRent />
    <Date />
    <PropertyRoom />
    <Bathroom />
    <Amenities />
    <Budget />
    </>
   
  );
};

export default Sidebar;
