import React from 'react';
import PropTypes from 'prop-types';

class InputStoryline extends React.Component {
  render() {
    const { value, event } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={ value }
          data-testid="storyline-input"
          onChange={ event }
        />
      </label>
    );
  }
}

InputStoryline.propTypes = {
  value: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};

export default InputStoryline;
