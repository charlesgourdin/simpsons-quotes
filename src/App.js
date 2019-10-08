import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteCard character="Homer Simpson" quote="Facts are meaningless. You could use facts to prove anything that's even remotely true." image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939" />
      <QuoteCard character="Waylon Smithers" quote="I think women and seamen don't mix." image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FWaylonSmithers.png?1497567511840" />   
    </div>
  );
}

export default App;
