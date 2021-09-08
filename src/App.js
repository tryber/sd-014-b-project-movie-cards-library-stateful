import React from 'react';
import MovieLibrary from './components/MovieLibrary';
import Header from './components/Header';
import movies from './data';
import AddMovie from './components/AddMovie';
import './App.css';

class App extends React.Component {
  callBack = () => console.log('foi');

  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={ movies } />
        <AddMovie onClick={ this.callBack } />
      </div>
    );
  }
}

export default App;
