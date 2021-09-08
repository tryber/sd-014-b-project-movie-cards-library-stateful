import React from 'react';
import MovieLibrary from './components/MovieLibrary';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import './App.css';

class App extends React.Component {
  callBack = () => console.log('foi');

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.callBack } />
        <MovieLibrary movies={ [] } />
      </div>
    );
  }
}

export default App;
