import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  render() {
    const { checked, onChange } = this.props;
    return (
      <label htmlFor="search-checkbox" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          id="search-checkbox"
          name="bookmarkedOnly"
          checked={ checked }
          onChange={ onChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

Checkbox.propTypes = PropTypes.shape({
  checked: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
}).isRequired;

export default Checkbox;
