import React from 'react';

class SearchBar extends React.Component {
  // noooo comitei na master
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <div>
        <span>{ searchText }</span>
        <span>{ onSearchTextChange } </span>
        <span>{ bookmarkedOnly }</span>
        <span>{ onBookmarkedChange }</span>
        <span>{ selectedGenre }</span>
        <span>{ onSelectedGenreChange }</span>
      </div>
    );
  }
}

export default SearchBar