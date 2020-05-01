import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

const wordurl = id => `https://shielded-earth-11285.herokuapp.com/words/${id}`;

class Word extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: {}
    }
  }


  componentDidMount(){
    console.log(this.props)
    fetch(wordurl(this.props.match.params.wordid))
    .then(res => res.json())
    .then(json => {
      console.log("fetched successfully!")
      console.log(json)
      this.setState({data: json})
    })
    .catch(error => console.log(error))
  }

  componentDidUpdate(prevProps){
    if(prevProps.match.params.wordid !== this.props.match.params.wordid){
      fetch(wordurl(this.props.match.params.wordid))
      .then(res => res.json())
      .then(json => {
        this.setState({data: json})
      })
      console.log("gee i sure hope i only see this once")
    }
  }

  render(){
    if(Object.keys(this.state.data).length > 0){
      return(
        <div>
          <h1>{this.state.data.name}</h1>
          <h2>{this.state.data.definition}</h2>
          <h3>Origin: {this.state.data.origin}</h3>
        </div>
      )
    }
    else {
      return(<p>Aw, nothing here. Maybe try waiting a bit?</p>)
    }
  }
}

export default withRouter(Word)