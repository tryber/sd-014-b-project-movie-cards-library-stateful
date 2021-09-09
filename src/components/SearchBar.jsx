import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import StandardInput from './StandardInput';
import StandardSelect from './StandardSelect';
import StandardCheckbox from './StandardCheckbox';

const arrayOfArrays = [
  ['Inclui o texto:', 'search-text', 'text-input', 'text'],
  ['Mostrar somente favoritos', 'show-favorite', 'checkbox-input', 'checkbox'],
  ['Filtrar por gênero', 'select', 'select-input',
    [{ Todos: '' }, { Ação: 'action' }, { Comédia: 'comedy' }, { Suspense: 'thriller' }]],
];

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <StandardInput
          propsInfoArray={ [...arrayOfArrays[0], searchText, onSearchTextChange] }
        />
        <StandardCheckbox
          propsInfoArray={ [...arrayOfArrays[1], bookmarkedOnly, onBookmarkedChange] }
        />
        <StandardSelect
          propsInfoArray={ [...arrayOfArrays[2], selectedGenre, onSelectedGenreChange] }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.callback,
  bookmarkedOnly: PropTypes.boolean,
  onBookmarkedChange: PropTypes.callback,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.callback,
}.isRequired;

export default SearchBar;
