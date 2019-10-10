import React from "react";
// import { timingSafeEqual } from "crypto";

class Filters extends React.Component {

  
  state = {
    value: 'all'
  }
  
  handleChange = (event) => {
    this.setState({value: event.target.value})
  }
  
  submitHandler = (event) => {
    event.preventDefault();
    this.props.submitHandler(this.state)
  }
  
  render() {

    return (
      <form onSubmit={this.submitHandler}>
        <div className="ui form">
          <h3>Animal type</h3>
            <div className="field">
              <select value={this.state.value} onChange={this.handleChange} name="type" id="type">
                <option value="all">All</option>
                <option value="cat">Cats</option>
                <option value="dog">Dogs</option>
                <option value="micropig">Micropigs</option>
              </select>
            </div>
            
            <div className="field">
            <button type="submit" className="ui secondary button">Find pets</button>
            </div>
        </div>
      </form>
    );
  }
}

export default Filters;
