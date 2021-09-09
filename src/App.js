import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieLibrary';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary />
      </div>
    );
  }
}

export default App;
