import React from 'react';
import './QuoteForm.css'

const MAX_LENGTH = 30;

class QuoteForm extends React.Component {
    constructor(props){
        super(props)
        this.state={
            character:"Homer Simpson"
        }
    }

    handleChange = (event) => {
        if (this.state.character.length<MAX_LENGTH){
        this.setState({character: event.target.value});
        } else {
          return;
        }
    }

    render() {
      const toLong = this.state.character.length>=MAX_LENGTH
      return (
        <form
        className="QuoteForm"
        >
        <label htmlFor="character">Character:</label>
        <input className={toLong ? 'length-maximum-reached' : 'length-ok'}
            id="name"
            name="character"
            type="text"
            value={this.state.character}
            onChange={this.handleChange}
        />
        <p>{30 - this.state.character.length}character left</p>
        <h4>Hello {this.state.character}</h4>
        </form>
      );
    }
  }
  
export default QuoteForm