import { Component, React} from "react";

class Demo2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
    console.log(value);
  };

  render() {
    return (
      <div className="radio-buttons">
        Windows
        <input
          id="windows"
          value="windows"
          name="platform"
          type="radio"
          onChange={this.handleChange}
        />
        Mac
        <input
          id="mac"
          value="mac"
          name="platform"
          type="radio"
          onChange={this.handleChange}
        />
        Linux
        <input
          id="linux"
          value="linux"
          name="platform"
          type="radio"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
export default Demo2;