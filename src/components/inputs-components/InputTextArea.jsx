import React from 'react';
import PropTypes from 'prop-types';

class InputTextArea extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        <p>Sinopse</p>
        <textarea
          data-testid="storyline-input"
          id="storyline"
          name="storyline"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputTextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTextArea;
