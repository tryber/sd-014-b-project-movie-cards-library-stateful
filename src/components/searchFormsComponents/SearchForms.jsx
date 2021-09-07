import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import Checkbox from './Checkbox';
import Select from './Select';

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
