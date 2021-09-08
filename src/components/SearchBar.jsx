// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h2>SearchBar</h2>
        <input placeholder="Searchbar maravilhoso" />
      </div>
    );
  }
}

export default SearchBar;
