import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';


const wordurl = id => `https://shielded-earth-11285.herokuapp.com/words/${id}`;

class Word extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: {},
      words: []
    }
  }


  componentDidMount(){
    fetch(wordurl(this.props.match.params.wordid))
    .then(res => res.json())
    .then(json => {
      this.setState({data: json, words: json.words})
    })
    .catch(error => console.log(error))
  }

  componentDidUpdate(prevProps){
    if(prevProps.match.params.wordid !== this.props.match.params.wordid){
      fetch(wordurl(this.props.match.params.wordid))
      .then(res => res.json())
      .then(json => {
        this.setState({data: json, words: json.words})
      })
    }
  }

  render(){
    if(Object.keys(this.state.data).length > 0 && this.state.words.length > 0){
      return(
        <div>
          <h1>{this.state.data.name}</h1>
          <h2>{this.state.data.definition}</h2>
          <h3>Origin: {this.state.data.origin}</h3>
          <h4>{this.state.data.pos}</h4>
          <h2>Related words:</h2>
          <ul>
            {this.state.words.map(word => {return(<li key={word.id}><Link to={`/${word.id}`}>{word.name}</Link></li>)})}
          </ul>
        </div>
      )
    }
    else if(Object.keys(this.state.data).length > 0){
      return(
        <div>
          <h1>{this.state.data.name}</h1>
          <h2>{this.state.data.definition}</h2>
          <h3>Origin: {this.state.data.origin}</h3>
          <h4>{this.state.data.pos}</h4>
        </div>
      )
    }
    else{
      return(<p>Aw, nothing here. Maybe try waiting a bit?</p>)
    }
  }
}

export default withRouter(Word)