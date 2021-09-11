import React from 'react';
import PropTypes from 'prop-types';

class SubtitleInput extends React.Component {
  render() {
    const { subtitle, inputChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo:
        <input
          type="text"
          id="subtitle-input"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ inputChange }
        />
      </label>
    );
  }
}

SubtitleInput.propTypes = {
  subtitle: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
};

export default SubtitleInput;
