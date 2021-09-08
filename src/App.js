import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      bookmarkedOnly: false,
      searchText: '',
    };
  }

  callBack() {
    console.log('xxx');
  }

  secondCallback() {
    console.log('ysy');
  }

  therdCallBack() {
    console.log('xsx');
  }

  render() {
    const { bookmarkedOnly, searchText } = this.state;
    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.callBack }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.secondCallback }
          selectedGenre="anotherString"
          onSelectedGenreChange={ this.therdCallBack }
        />
        <AddMovie onClick={ this.funcCall } />

      </div>
    );
  }
}

export default App;
