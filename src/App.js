import React, {Component}from 'react';
import Navbar from './components/Navbar';
import QuoteList from './components/QuoteList';
import Lamp from './Lamp';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: false
    };
  }

  changeState = () => {
    this.setState({working: !this.state.working})
  }

  render(){
    return (
      <div className="App">
        <Navbar />
        <div className="isWorking">
          <button className="appButton" onClick={this.changeState}>Change State</button>
          <p>Homer is {this.state.working ? "working" : "not working"}</p>
          <img className={this.state.working ? "App-logo-turn" : "App-logo"} src={logo} alt="logo"/>
        </div>
        <QuoteList />
      </div>
    );
  }
}

export default App;
