import { Row, Col } from "react-bootstrap";
import {UserContext} from "../contexts/userContext";
import { useContext,useState } from "react"

import Sidebar from "../components/Sidebar";
import CardList from "../components/CardList";
import data from "../data/fakeData";
import userData from "../data/User";
import Filter from "../components/Filter";
import Header from "../components/Header";
const Home = () => {
const [state,dispatch] = useContext(UserContext);
const contextValue = useContext(UserContext);
console.log(contextValue[0])
const userlogin=contextValue[0].user.username
console.log(userlogin);
console.log(state)
const userFilter = userData.filter(item => ( item.username === userlogin ));
console.log(userFilter)
console.log(userData)

console.log(JSON.stringify(userFilter))

if (state.isLogin){
  console.log("benar")
  const userstatus=userFilter[0].status
  if(userstatus === "user"){
  console.log("benar")

    return (
<>

</>
    )
  }else{
    return (
      <p>admin</p>
    )
  }
}
// console.log(JSON.stringify(userFilter[0].status))
// const statusUser=userFilter[0].status
// console.log(statusUser)


// const userIsLogin=userFilter[0].status
// console.log(userIsLogin)

  return (
    <div>
        <Filter />

       
    </div>
  );
};

export default Home;
