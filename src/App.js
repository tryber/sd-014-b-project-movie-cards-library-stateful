import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import './App.css';
import movies from './data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <>
        <header className="App">
          <Header />
        </header>
        <main>
          <MovieLibrary movies={ movies } />
        </main>
      </>
    );
  }
}

export default App;
