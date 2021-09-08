import React from 'react';
import Header from './components/Header';
import movies from './data';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import AddMovie from './components/AddMovie';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={ movies } />
        <AddMovie onClick={ (state) => console.log(state) } />
      </div>
    );
  }
}

export default App;
