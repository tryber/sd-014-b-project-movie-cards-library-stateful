import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputText from './formsComponents/inputText';

class SearchForms extends Component {
  render() {
    const { searchText, onTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <InputText value={ searchText } onChange={ onTextChange } />
      </form>
    );
  }
}

SearchForms.propTypes = PropTypes.shape({
  searchText: PropTypes.string,
  onTextChange: PropTypes.func,
}).isRequired;

export default SearchForms;
