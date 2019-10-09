import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';
import QuoteList from './components/QuoteList';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteList />
    </div>
  );
}

export default App;
