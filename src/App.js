import React from 'react';
import Quotes from './Quotes';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: [],
    }
    this.getQuotes = this.getQuotes.bind(this);
  }

  getQuotes() {
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      .then(response => response.data)
      .then(data => 
        // this.setState({card: data}),
        this.setState({card: data[0]})
      )}

  render() {
    console.log(this.state.card)
    return (
      <div className="App">
        <button onClick = {this.getQuotes}>Get a quote</button>
        <Quotes card= {this.state.card} />
      </div>
    );
  }
  }


export default App;
