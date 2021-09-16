import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { storyline, onChange } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          type="text"
          name="storyline"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  storyline: PropTypes.string.isRequired,
};

export default TextArea;
