import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const defaultCallback = (item) => {
    console.log(item);
  };
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie onClick={ defaultCallback } />
    </div>
  );
}

export default App;
