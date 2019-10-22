import React, {Component}from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote:"",
      image:"",
      character:""
    };
  }

  getCard= ()=> {
    // Send the request
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        console.log(data)
        this.setState({
          quote: data[0].quote,
          image: data[0].image,
          character: data[0].character,
        });
    });
  }


  render(){
    return (
      <div className="App">
        <Navbar />
        <QuoteCard quote={this.state.quote} image={this.state.image} character={this.state.character}/>
        <button onClick={this.getCard}>Change it!</button>
      </div>
    );
  }
}

export default App;
