import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import data from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie movie={ data } />
    </div>
  );
}

export default App;
