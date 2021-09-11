import React from 'react';
import Header from './components/Header';
import './App.css';
import AddMovie from './components/AddMovie';
import SearchBar from './components/SearchBar';

class App extends React.Component{ 
  onClick(state) {
    console.log(state);
  }

  render(){
    return (
      <main className="App">
        <Header />
        <AddMovie onClick={ this.onClick }/>
      </main>
    );
  }
}

export default App;
