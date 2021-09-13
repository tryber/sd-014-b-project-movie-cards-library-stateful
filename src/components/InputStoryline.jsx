import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputStoryline extends Component {
  render() {
    const { value, funcCallback } = this.props;
    return (
      <label htmlFor="title" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          type="text"
          value={ value }
          id="storyline"
          onChange={ funcCallback }
        />
      </label>
    );
  }
}
InputStoryline.propTypes = {
  value: PropTypes.string.isRequired,
  funcCallback: PropTypes.func.isRequired,
};

export default InputStoryline;
