import React from 'react';
import Header from './components/Header';
import './App.css';
// import SearchBar from './components/SearchBar';
// import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';

class App extends React.Component {
  // troquei = (estate) => {
  //   console.log('funcionou', estate);
  // }

  render() {
    return (
      <div className="App">
        <Header />
        {/* <SearchBar /> */}
        {/* <AddMovies /> */}
        {/* <AddMovie onClick={ this.troquei } /> */}
        <MovieLibrary movies={ movies } />
      </div>
    );
  }
}

export default App;
