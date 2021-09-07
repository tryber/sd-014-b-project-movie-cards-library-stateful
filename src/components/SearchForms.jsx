import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputText from './formsComponents/inputText';
import Checkbox from './formsComponents/checkbox';
import Select from './formsComponents/select';

class SearchForms extends Component {
  render() {
    const { searchText,
      onTextChange,
      checked,
      onChecked,
      selectedGenre,
      onSelectGenre } = this.props;
    return (
      <form className="search-forms" data-testid="search-bar-form">
        <InputText value={ searchText } onChange={ onTextChange } />
        <Checkbox check={ checked } onChange={ onChecked } />
        <Select selected={ selectedGenre } onChange={ onSelectGenre } />
      </form>
    );
  }
}

SearchForms.propTypes = PropTypes.shape({
  searchText: PropTypes.string,
  onTextChange: PropTypes.func,
  checked: PropTypes.bool,
  onChecked: PropTypes.func,
}).isRequired;

export default SearchForms;
