import React from 'react';
import Header from './components/Header';
import './App.css';
// eslint-disable-next-line import/no-named-as-default
import AddMovie from './components/AddMovie';
// eslint-disable-next-line import/no-named-as-default
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie />
    </div>
  );
}

export default App;
