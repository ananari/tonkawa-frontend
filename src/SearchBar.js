import React, {Component} from 'react';
import './SearchBar.css';

const postbj = {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "accept": "application/json"
  }
}
const searchURL = "https://shielded-earth-11285.herokuapp.com/search"

export default class SearchBar extends Component {

  constructor(){
    super();
    this.state = {
      query: "",
      results: {}
    };
  }

  handleChange = event => {
    event.persist();
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    getObj.body = JSON.stringify({query: this.state.query})
    fetch(searchURL, postObj)
    .then(res => res.json())
    .then(json => {
      this.props.setResults({results: json})
    })
    .catch(error => console.log(error))
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