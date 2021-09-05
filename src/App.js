import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      bookmarkedOnly: true,
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
    const { bookmarkedOnly } = this.state;
    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText="string"
          onSearchTextChange={ this.callBack }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.secondCallback }
          selectedGenre="anotherString"
          onSelectedGenreChange={ this.therdCallBack }
        />
      </div>
    );
  }
}

export default App;
