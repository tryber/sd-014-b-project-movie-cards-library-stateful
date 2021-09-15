import React from 'react';
import Header from './components/Header';

import MovieLibrary from './components/MovieLibrary';
import AddMovie from './components/AddMovie';

class App extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <AddMovie />
        <MovieLibrary movies={ movies } />
      </div>
    );
  }
}

export default App;
