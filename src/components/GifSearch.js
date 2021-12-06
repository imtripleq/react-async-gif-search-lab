import React, { Component } from "react";

export default class GifSearch extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }

  handleSearch = (e) => {
    e.preventDefault();
    this.props.handleClick(this.state.search);
  };

  render() {
    return (
      <div className="searchbar">
        <form onSubmit={this.handleSearch}>
          <h4>Search your gif!</h4>
          <input
            type="text"
            value={this.state.search}
            onChange={(ev) => this.setState({ search: ev.target.value })}
          />
          <button className="btn btn-primary" onClick={this.handleClick}>
            Fetch!
          </button>
        </form>
      </div>
    );
  }
}
