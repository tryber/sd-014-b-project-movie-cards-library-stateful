import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <input type="text" name="search" />
      </form>
    );
  }
}

export default SearchBar;
