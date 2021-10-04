import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends Component {
  render() {
    const { subtitle, onChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="inputSubtitle">
        Subtítulo
        <input
          data-testid="subtitle-input"
          name="subtitle"
          id="inputSubtitle"
          type="text"
          value={ subtitle }
          onChange={ onChange }
        />
      </label>
    );
  }
}

SubtitleInput.propTypes = {
  subtitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SubtitleInput;
