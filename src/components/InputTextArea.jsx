import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputSelect extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="textarea-storyline" data-testid="storyline-input-label">
        <p>Sinopse</p>
        <textarea
          data-testid="storyline-input"
          id="textarea-storyline"
          name="storyline"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
