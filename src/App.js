import React from 'react';
import Quotes from './Quotes';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: null,
    }
    this.getQuotes = this.getQuotes.bind(this);
  }

  componentDidMount() {
    // Get quotes for server
    this.getQuotes();
  }

  getQuotes() {
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      .then(response => response.data)
      .then(data => 
        this.setState({card: data[0]})
      )}

 
  render() {
    return (
      <div className="App">
        {this.state.card ? (
        <Quotes card= {this.state.card} />
        ) : (
          <p>Loading</p>
        )}
        <button onClick = {this.getQuotes}>Get a quote</button>
      </div>
    );
  }
  }


export default App;
