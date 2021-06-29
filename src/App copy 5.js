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
      bathroom: "",
      duration:"",
      data:data
          };

    this.handleBathroomChange = this.handleBathroomChange.bind(this);
    this.handleDuratuionChange = this.handleDuratuionChange.bind(this);
  }

    handleBathroomChange(e) {
      const bathroom = e.target.value;
      console.log(bathroom);
      this.setState({ bathroom: bathroom });
    }
    handleDuratuionChange(e) {
      const duration = e.target.value;
      console.log(duration);
      this.setState({ duration: duration });
    }


  
  render() {
    
    const bathrooms = ["1", "2", "3"];
    const durations = ["day", "month", "year"];

    const DuratuionToShow = this.state.data.filter(item => ( item.duration === this.state.duration));
    const shoesToShow = this.state.data.filter(item => ( item.bathroom === this.state.bathroom));
    // const shoesToShow = this.state.shoes[0].bathroom
    // console.log(data);
    console.log(shoesToShow);
    return (
      <>
    
     
        <form>
          {bathrooms.map((bathroom, index) => (
            <label key={index}>
              {bathroom}
              <input
                value={bathroom}
                checked={this.state.bathroom === bathroom}
                onChange={this.handleBathroomChange}
                type="radio"
              />
            </label>
          ))}
        </form>
        <form>
          {durations.map((duration, index) => (
            <label key={index}>
              {duration}
              <input
                value={duration}
                checked={this.state.duration === duration}
                onChange={this.handleDuratuionChange}
                type="radio"
              />
            </label>
          ))}
        </form>
        {shoesToShow.map(shoe => (
          <>
          {/* console.log(shoe.name); */}
          <div>{shoe.bathroom} </div>
          {/* <div>{shoe.bedr} </div> */}
          </>

        ))}
         {DuratuionToShow.map(durations => (
          <>
          {/* console.log(durations.name); */}
          <div>{durations.duration} </div>
          {/* <div>{durations.bedr} </div> */}
          </>

        ))}
    {/* <CardItem/> */}
        
      </>
    );
  }
}
export default App;