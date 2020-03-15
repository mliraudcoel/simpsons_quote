import React from 'react';

import './QuoteForm.css';


const MAX_LENGTH = 30;

class QuoteForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            character : 'Homer Simpson'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.value.length > MAX_LENGTH) {
            return;
          }
        this.setState({character : event.target.value});
      }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.character);
        event.preventDefault();
    }

    render() {
        const maximumReached = this.state.character.length >= MAX_LENGTH;
        const numRemaining = MAX_LENGTH - this.state.character.length;

      return (
        <form onSubmit={this.handleSubmit}
          className="QuoteForm"
        >
          <label htmlFor="character">Character:</label>
          <input
            className={maximumReached ? 'length-maximum-reached' : 'length-ok'}
            id="name"
            name="character"
            type="text"
            value= {this.state.character}
            onChange= {this.handleChange}
          />
            <small className="remaining-characters">
            {numRemaining} remaining characters
            </small>
        <input type="submit" value="Submit"/>
        </form>
      );
    }
  }
  

export default QuoteForm;

