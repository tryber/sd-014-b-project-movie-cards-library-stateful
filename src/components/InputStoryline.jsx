import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputStoryline extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id=""
            cols="30"
            rows="10"
            data-tesid="storyline-input"
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}
InputStoryline.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};
