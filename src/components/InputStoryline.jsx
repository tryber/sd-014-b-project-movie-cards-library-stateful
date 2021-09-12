import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputStoryline extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            value={ value }
            onChange={ onChange }
            name="storyline"
            data-testid="storyline-input"
          />
        </label>
      </div>
    );
  }
}
InputStoryline.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
