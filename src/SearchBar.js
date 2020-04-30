import React, {Component} from 'react';
import './SearchBar.css';

const postObj = {
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
      language: "",
      searchtype: "plain",
      results: {}
    };
  }

  handleChange = event => {
    event.persist();
    this.setState({[event.target.name]: event.target.value})
    console.log(this.state.language)
  }

  handleSubmit = event => {
    event.preventDefault();
    postObj.body = JSON.stringify({query: this.state.query, language: this.state.language, searchtype: this.state.searchtype})
    fetch(searchURL, postObj)
    .then(res => res.json())
    .then(json => {
      this.props.setResults(json)
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
                <select name="language" onChange={event => this.handleChange(event)}>
                  <option value="either">Choose language</option>
                  <option value="english">English</option>
                  <option value="tonkawa">Tonkawa</option>
                </select>
                <select name="searchtype" onChange={event => this.handleChange(event)}>
                  <option value="plain">Plain search</option>
                  <option value="regex">Regex</option>
                </select>
                <input type="submit" value="Search" />
              </div>
          </form>
      </div>
    )
  }
}