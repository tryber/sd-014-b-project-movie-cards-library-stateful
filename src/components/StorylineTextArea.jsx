import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StorylineTextArea extends Component {
  render() {
    const { initialState, onChange } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          cols="30"
          rows="10"
          value={ initialState }
          onChange={ (event) => {
            onChange(event);
          } }
        />
      </label>
    );
  }
}

StorylineTextArea.propTypes = {
  initialState: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StorylineTextArea;
