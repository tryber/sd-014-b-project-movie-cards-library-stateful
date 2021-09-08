import PropTypes from 'prop-types';
import React from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="" data-testid="text-input-label">
          Inclui o texto:
          <input type="text" data-testid="text-input" onChange={ this.props.onSearchTextChange } value={ this.props.searchText } />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};
