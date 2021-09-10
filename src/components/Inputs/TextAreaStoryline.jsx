import React from 'react';
import PropTypes from 'prop-types';

class TextAreaStoryline extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          type="text"
          name="storyline"
          onChange={ onChange }
          value={ value }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

TextAreaStoryline.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextAreaStoryline;
