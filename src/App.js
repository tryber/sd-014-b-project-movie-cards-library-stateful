import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import data from './data';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ data } />
    </div>
  );
}

export default App;

/*
Requisto 16: importamos os dados - data from data
importamos movielibrary para poder renderizar
passamos os dados do banco de dados dentro da props para que o movielibraty tenha acesso
*/
