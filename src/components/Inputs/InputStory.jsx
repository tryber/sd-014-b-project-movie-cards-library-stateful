import React from 'react';
import PropTypes from 'prop-types';

class InputStory extends React.Component {
  render() {
    const { onChange } = this.props;

    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          id="storyline"
          type="text"
          onChange={ onChange }
          required
        />
      </label>
    );
  }
}

InputStory.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default InputStory;
