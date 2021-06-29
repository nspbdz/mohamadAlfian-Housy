import { useContext } from "react"
import {UserContext} from "../contexts/userContext";
import userData from "../data/User";
// import userData from '../data/User'

function Profile() {
  const {state} = useContext(UserContext);
  const contextValue = useContext(UserContext);
  console.log(contextValue)
  return (
    <>
      <p className='h2'>{contextValue[0].user.name}</p>
      <p className='h2'>{contextValue[0].user.username}</p>
      <p className='h2'>{contextValue[0].user.password}</p>

      {/* <p className='h1'>{state.user.name}</p>
      <p className='h2'>{state.user.email}</p>
      <p className='h3'>{state.user.password}</p> */}
    </>
  )
}

export default Profile;
