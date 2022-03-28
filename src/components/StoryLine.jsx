import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StoryLine extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          id="storyline"
          type="text"
          value={ value }
          onChange={ onChange }
          required
        />
      </label>
    );
  }
}

StoryLine.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StoryLine;
