import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends React.Component {
  handleTextChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  handleBookmarked(event) {
    this.setState({
      bookmarkedOnly: event.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    return (
      <div className="App">
        <Header />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

export default App;
