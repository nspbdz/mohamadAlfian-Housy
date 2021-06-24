import { InputGroup,FormControl } from "react-bootstrap";
import React from 'react';
import "../styles/customBtn.css";

class PropertyRoom extends React.Component {
    constructor(){
        super();

        this.state = {
           one: false,
           two: false,
           three: false
        }
    }

    one(){
       this.setState({one: !this.state.one})
    }
    two(){
        this.setState({two: !this.state.two})
     }
  
     three(){
        this.setState({three: !this.state.three})
     }
  
    render(){
        let btn_one = this.state.one ? "blueButton" : "whiteButton";
        let btn_two = this.state.two ? "blueButton" : "whiteButton";
        let btn_three = this.state.three ? "blueButton" : "whiteButton";

        return (
            <>
        <p className="h3 text-left font-weight-bold">Property Room</p>
            <p>Bedroom</p>
             <button id="btn" className={btn_one} onClick={this.one.bind(this)}>
                  1
             </button>
             
             <button id="btn" className={btn_two} onClick={this.two.bind(this)}>
              2
             </button>
            <button id="btn" className={btn_three} onClick={this.three.bind(this)}>
                3
            </button>
            <button id="btn" className={btn_three} onClick={this.three.bind(this)}>
                4
            </button>
            <button id="btn" className={btn_three} onClick={this.three.bind(this)}>
                5+
            </button>
            </>

        )
    }
}
  
  export default PropertyRoom;
