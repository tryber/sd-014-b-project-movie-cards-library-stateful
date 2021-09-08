import React from 'react';
import Header from './components/Header';
import './App.css';

class App extends React.Component {
/*   constructor() {
    super();
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.state = {
    };
  }

  onSearchTextChange() {
  } */

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
