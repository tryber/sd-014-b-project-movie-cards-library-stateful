import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends Component {
  render() {
    const { initialState, onChange } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          value={ initialState }
          onChange={ (event) => {
            onChange(event);
          } }
        />
      </label>
    );
  }
}

SubtitleInput.propTypes = {
  initialState: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SubtitleInput;
