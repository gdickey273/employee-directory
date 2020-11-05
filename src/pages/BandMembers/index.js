import React, { Component } from "react";
import { getBandMembers } from "../../utils/API";

import FilterForm from "../../components/FilterForm";
import Table from "../../components/Table";

class BandMembers extends Component {
  state = {
    bandMembers: null,
    displayArray: null,
    filter: ""
  }

  componentDidMount() {
    const data = getBandMembers();

    this.setState({bandMembers : data});
    this.setState({displayArray: data});
    console.log(data);
  }
  
  handleInputChange = (event) => {
    this.setState({ filter: event.target.value}); 
    console.log(this.state.filter);
  }
  
  setArrayState = (event) => {
    console.log(event.target.textContent);
  }
  render () {
    return (
      <>
        <FilterForm 
          handleInputChange = {this.handleInputChange}
        />
        {this.state.displayArray &&
          <Table
            setArrayState = {this.setArrayState}
            displayArray = {this.state.displayArray}
          />
        }
      </>
    )
  }
}

export default BandMembers;