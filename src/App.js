import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

export default function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie />
    </div>
  );
}
