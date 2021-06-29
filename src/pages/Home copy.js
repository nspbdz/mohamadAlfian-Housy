import { useState } from "react";
import Demo2 from "../components/Demo2";

function Home({ isLogged }) {
  const [duration, setDuration] = useState("Year");

  const handleDuration = (e) => {
    const setDuration = e.target.value;
    console.log(setDuration);
    // setDuration(e.target.value);
  };

  // console.log(filterHouseBasedOnSpec(houses));

  return (
    <div >
    
      <div style={{ display: "flex", width: "100%" }}>
        <Demo2        
          handleDuration={handleDuration}
          duration={duration}
        />
      </div>
    </div>
  );
}

export default Home;
