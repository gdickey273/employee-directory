import React, { Component} from "react";

class FilterForm extends Component {
  
  render () {
    return (
      <>
      <form className="filter">
        <div className="form-group">
          <label htmlFor="name">Filter Table By Member Name</label>
          <input
            //value={this.props.filter}
            onChange={(e) => this.props.handleInputChange(e)}
            //name="name"
            type="text"
            className="form-control"
            placeholder="Band Member Name"
            id="name"
          />
        </div>
      </form>
      </>
    )
  }
  
}

export default FilterForm;