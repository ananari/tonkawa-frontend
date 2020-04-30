import React, {Component} from 'react';

export default class SearchResults extends Component {

  componentDidUpdate(){
    console.log(`results compoment has props of ${this.state}`)
  }

  render(){
    if(this.props.results.length > 0){
      return(
        <ul>
          {this.props.results.map(word => {
            return(
              <li>word.name</li>
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