import React, {Component} from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {

  constructor(){
    super();
    this.state = {
      query: ""
    };
  }

  handleChange = event => {
    event.persist();
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log("you did it!")
  }


  render(){
    return(
      <div className="searchbar">
          <form onSubmit={event => this.handleSubmit(event)}>
              <div>
                <label>Search term </label>
                <input type="text" name="query" onChange={event => this.handleChange(event)} value={this.state.query} placeholder="Search here" />
                <input type="submit" value="Search" />
              </div>
          </form>
      </div>
    )
  }
}