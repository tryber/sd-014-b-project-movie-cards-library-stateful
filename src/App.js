import React from 'react';
import Header from './components/Header';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';
import './App.css';
import movies from './data';

class App extends React.Component {
  constructor() {
    super();
    this.newMovie = this.newMovie.bind(this);

    this.state = {
    };
  }

  newMovie(state) {
    movies.push(state);
  }

  render() {
    return (
      <>
        <header className="App">
          <Header />
        </header>
        <main>
          <MovieLibrary movies={ movies } />
          <AddMovie onClick={ this.newMovie } />
        </main>
      </>
    );
  }
}

export default App;
