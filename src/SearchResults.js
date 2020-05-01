import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class SearchResults extends Component {


  render(){
    if(this.props.results.length > 0){
      return(
        <ul>
          {this.props.results.map(word => {
            return(
            <li key={word.id}><Link to={`/${word.id}`}>{word.name} - {word.definition}</Link></li>
            )
          })}
        </ul>
      )
    }
    else{
      return(
        <p>Oops! No results.</p>
      )
    }
  }

}