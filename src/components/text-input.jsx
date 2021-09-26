import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
    } = this.props;
    return (
      <div>
        <label data-testid="text-input-label" htmlFor="1">
          Inclui o texto:
          <input
            type="text"
            data-testid="text-input"
            onChange={ onSearchTextChange }
            value={ searchText }
            name="searchText"
          />
        </label>
      </div>
    );
  }
}

TextInput.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
}.isRequired;

export default TextInput;
