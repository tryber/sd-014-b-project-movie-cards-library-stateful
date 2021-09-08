// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { searchText, onSearchTextChange } = this.props;
    console.log(this);

    return (
      <div>
        <h2>SearchBar</h2>
        <form data-testid="search-bar-form">
          <label htmlFor="input" data-testid="text-input-label">
            Inclui o texto
            <input
              name="input"
              placeholder="Searchbar maravilhoso"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>

        </form>
      </div>
    );
  }
}

export default SearchBar;
