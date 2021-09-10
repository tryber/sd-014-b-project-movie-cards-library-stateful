import React from 'react';
import PropTypes from 'prop-types';

class InputStoryline extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="textarea-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="textarea-input"
          name="storyline"
          type="text"
          value={ value }
          onChange={ onChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

InputStoryline.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputStoryline;
