import React from 'react';
import PropTypes from 'prop-types';

class SearchText extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <input
        type="text"
        name="searchText"
        data-testid="text-input"
        onChange={ value }
        value={ onChange }
      />
    );
  }
}

SearchText.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchText;
