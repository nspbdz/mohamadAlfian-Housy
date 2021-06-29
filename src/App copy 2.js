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
      data:data
          };

    this.handleBathroomChange = this.handleBathroomChange.bind(this);
  }

    handleBathroomChange(e) {
      const bathroom = e.target.value;
      console.log(bathroom);
      this.setState({ bathroom: bathroom });
    }

  
  render() {
    
    const bathrooms = ["1", "2", "3"];
    const shoesToShow = this.state.data.filter(item => ( item.bathroom === item.bathroom));
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
        {shoesToShow.map(shoe => (
          <>
          {/* console.log(shoe.name); */}
          <div>{shoe.name} </div>
          <div>{shoe.color} </div>
          </>

        ))}
    {/* <CardItem/> */}
        
      </>
    );
  }
}
export default App;