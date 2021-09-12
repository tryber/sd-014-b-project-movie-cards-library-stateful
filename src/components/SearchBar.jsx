import React from 'react';

class SearchBar extends React.Component {
  // constructor() {
  //   super();
  //   this.onSearchTextChange = this.onSearchTextChange.bind;
  // }

  // onSearchTextChange() {
  //   const { name } = target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;

  //   this.setState({
  //     [name]: value,
  //   });
  // }

  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text">
          Inclui o texto:
          <input onChange={ this.onSearchTextChange } />
          <input type="text" id="text" name="text" onChange={ this.onSearchTextChange } />
        </label>
      </form>
    );
  }
}

export default SearchBar;
