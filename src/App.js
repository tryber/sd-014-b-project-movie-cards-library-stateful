import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick(state) {
    console.log(state);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddMovie onClick={ this.onClick } />
        <SearchBar />
      </div>
    );
  }
}

export default App;
