import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
// import MovieLibrary from './components/MovieLibrary';

class App extends React.Component {
  troquei = (estate) => {
    console.log('funcionou', estate);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        {/* <AddMovies /> */}
        <AddMovie onClick={ this.troquei } />
        {/* <MovieLibrary /> */}
      </div>
    );
  }
}

export default App;
