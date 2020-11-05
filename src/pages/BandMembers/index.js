import React, { Component } from "react";
import API from "../../utils/API";

import FilterForm from "../../components/FilterForm";

class BandMembers extends Component {
  state = {
    bandMembers: [],
    filter: ""
  }
  
  handleInputChange = (event) => {
    this.setState({ filter: event.target.value}); 
    console.log(this.state.filter);
  }
  
  render () {
    return (
      <>
        <FilterForm 
          handleInputChange = {this.handleInputChange}
        />
      </>
    )
  }
}

export default BandMembers;