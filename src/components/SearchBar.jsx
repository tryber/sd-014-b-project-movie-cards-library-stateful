// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto:
          <input value={ searchText } onChange={ onSearchTextChange } data-testid="text-input" />
        </label>
      </form>
    );
  }
}

export default SearchBar;
