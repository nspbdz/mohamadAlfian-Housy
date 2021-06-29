import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import CardItem from "./components/CardItem";
import CardList from "./components/CardList";
import data from "./data/fakeData";
import Bathroom from "./components/Bathroom";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      bathroom: "",
      duration:"",
      data:data
          };

    this.handleBathroomChange = this.handleBathroomChange.bind(this);
  }

    handleBathroomChange(e) {
      const duration = e.target.value;
      console.log(duration);
      this.setState({ duration: duration });
    }

  
  render() {
    
    const durations = ["day", "month", "year"];
    const shoesToShow = this.state.data.filter(item => ( item.duration === this.state.duration));
    // const shoesToShow = this.state.shoes[0].bathroom
    // console.log(data);
    console.log(shoesToShow);
    return (
      <>
    
       <div>
        <ul>
          {
             this.state.data.map(function(item, i){
              // console.log(item.bathroom);
              return <li  key={i}>Test</li>
            })
         }
        </ul>
      </div>
        <form>
          {durations.map((duration, index) => (
            <label key={index}>
              {duration}
              <input
                value={duration}
                checked={this.state.duration === duration}
                onChange={this.handleBathroomChange}
                type="radio"
              />
            </label>
          ))}
        </form>
        {shoesToShow.map(shoe => (
          <>
          {/* console.log(shoe.name); */}
          <div>{shoe.duration} </div>
          <div>{shoe.location} </div>
          </>

        ))}
    {/* <CardItem/> */}
        
      </>
    );
  }
}
export default App;