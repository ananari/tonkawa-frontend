import React, {Component} from 'react';
import SearchBar from './SearchBar';

export default class SearchContainer extends Component {
  constructor(){
    super();
    this.state = {
      results: {}
    };
  }

  setResults = results => {
    this.setState({results: results});
  }

  render(){
    return(
      <div>
        <SearchBar setResults={this.setResults} />
      </div>
    )
  }



}