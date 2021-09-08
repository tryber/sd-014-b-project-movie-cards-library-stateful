import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextTag from './TextTag';
import FavoriteTag from './FavoriteTag';
import GenreSearch from './GenreSearch';

export default class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      selectedGenre, onSelectedGenreChange, onBookmarkedChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <TextTag
          searchText={ searchText }
          onSearchTextChange={ onSearchTextChange }
        />
        <FavoriteTag
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ onBookmarkedChange }
        />
        <GenreSearch
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
      </form>
    );
  }
}

SearchBar.propTypes = PropTypes.shape({
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedOnly: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenre: PropTypes.func,
}).isRequired;

// Problema do label control resolvido aqui: https://stackoverflow.com/questions/54446655/eslint-rule-for-label
