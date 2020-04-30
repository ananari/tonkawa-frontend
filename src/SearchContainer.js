import React, {Component} from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

export default class SearchContainer extends Component {
  constructor(){
    super();
    this.state = {
      results: []
    };
  }

  setResults = results => {
    this.setState({results: results});
    console.log("state has been set");
  }

  componentDidUpdate(){
    console.log(this.state)
  }

  render(){
    return(
      <div>
        <SearchBar setResults={this.setResults} />
        <SearchResults results={this.state.results} />
      </div>
    )
  }



}