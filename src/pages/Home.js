import { Row, Col } from "react-bootstrap";
import { useState } from "react";

import Sidebar from "../components/Sidebar";
import CardList from "../components/CardList";
import data from "../data/fakeData";
import Filter from "../components/Filter";
import TypeRent from "../components/TypeRent";
import SendData from "../components/SendData";
const Home = () => {
  const [state, setState] = useState({});
  // const handleChange = (e) => setValue(e.target.value);

  function handleChange(event) {
    const { name, value } = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));
    console.log(value)
    console.log(name)
  }

  
  // console.log(value);

  return (
    <div>
     


        <Filter />
        <SendData />
        
       
    </div>
  );
};

export default Home;
