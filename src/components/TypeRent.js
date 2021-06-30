import { InputGroup,FormControl } from "react-bootstrap";
import React from 'react';
import "../styles/customBtn.css";

class TypeRent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
          bathroom: "",
          bedroom: "",
          Furnished: "",
          price: "",
          SharedCommodities: "",
          PetAllowed: "",
          rent:"",
          value: ""
           
        }
        this.handleDuratuionChange = this.handleDuratuionChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
 
    }
    // handleChange = e =>  this.setState({ [e.target.name]: e.target.value });
    handleChange = (e) => {
      this.setState({ value: e.target.value });
    };
    handleDuratuionChange(e) {
      const rent = e.target.value;
      const rent1 = e.target.name;
      console.log(rent);
      console.log(rent1);
      this.setState({ [e.target.name]: e.target.value });
      this.setState({
        bathroom: "",
        bedroom: "",
        Furnished: "",
        price: "",
        SharedCommodities: "",
        PetAllowed: "",
      })
    }

  
    render(){
        // let btn_day = this.state.day ? "blueButton" : "whiteButton";
        // let btn_month = this.state.month ? "blueButton" : "whiteButton";
        // let btn_year = this.state.year ? "blueButton" : "whiteButton";
        const rents = ["day", "month", "year"];

        return (
            <>
        <p className="h3 text-left font-weight-bold">Type Of Rent</p>

        <form >
          {rents.map((rent, index) => (
            <label key={index} style={{border:"1px solid #CCC",width:"50px",margin:"15px"}}>
              {rent}
              <input   
              style={{display:"none"}}
                value={this.state.value}
                checked={this.state.value}
                onChange={this.handleChange}
                type="radio"
              />
            </label>
          ))}
        </form>
            </>

        )
    }
}
  
  export default TypeRent;
