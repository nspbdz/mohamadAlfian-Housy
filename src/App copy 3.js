import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import CardItem from "./components/CardItem";
import CardList from "./components/CardList";
import data from "./data/fakeData";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      shoes: [
        { name: "Black Shoe", color: "Black", price: 180 },
        { name: "Red Shoe", color: "Red", price: 120 },
        { name: "White Shoe", color: "White", price: 100 }
      ]
    };

    this.handleColorChange = this.handleColorChange.bind(this);
  }

    handleColorChange(e) {
      const color = e.target.value;
      console.log(color);
      this.setState({ color: color });
    }

  
  render() {
    const colors = ["Black", "Red", "White"];
    const shoesToShow = this.state.shoes.filter(item => ( item.color === this.state.color));
    console.log(shoesToShow);
    return (
      <>
        <form>
          {colors.map((color, index) => (
            <label key={index}>
              {color}
              <input
                value={color}
                checked={this.state.color === color}
                onChange={this.handleColorChange}
                type="radio"
              />
            </label>
          ))}
        </form>
        {shoesToShow.map(shoe => (
          <>
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