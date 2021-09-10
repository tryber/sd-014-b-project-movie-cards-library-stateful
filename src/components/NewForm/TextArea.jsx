import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { storyline, onChange } = this.props;
    return (
      <label htmlFor="storylineInput" data-testid="storylineInputLabel">
        Sinopse
        <textarea
          type="text"
          name="storyline"
          data-testid="storylineInput"
          value={ storyline }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  storyline: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
