import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  render() {
    const { check, onChange } = this.props;
    return (
      <label htmlFor="search-checkbox" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          id="search-checkbox"
          checked={ check }
          onChange={ onChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }
}

Checkbox.propTypes = PropTypes.shape({
  check: PropTypes.bool,
  change: PropTypes.func,
}).isRequired;

export default Checkbox;
