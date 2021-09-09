import React from 'react';
import Header from './components/Header';
import movies from './data';
import AddMovie from './components/AddMovie';
import './App.css';
import MovieLibrary from './components/MovieLibrary';

class App extends React.Component {
  teste() {
    console.log('clicou');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={ movies } />
        <AddMovie onClick={ this.teste } />
      </div>
    );
  }
}

export default App;
