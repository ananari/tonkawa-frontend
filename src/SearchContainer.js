import React, {Component} from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

export default class SearchContainer extends Component {
  constructor(){
    super();
    this.state = {
      results: {}
    };
  }

  setResults = results => {
    console.log(results);
    this.setState({results: results});
    console.log("state has been set");
  }

  render(){
    return(
      <div>
        <SearchBar setResults={this.setResults} />
        <SearchResults />
      </div>
    )
  }



}