import React from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends React.Component {
  render() {
    const { subtitle } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo:
        <input
          type="text"
          id="subtitle-input"
          value={ subtitle }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

SubtitleInput.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default SubtitleInput;
