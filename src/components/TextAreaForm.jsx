import React from 'react';
import PropTypes from 'prop-types';

class TextAreaForm extends React.Component {
  render() {
    const { storyline, myFunction } = this.props;
    return (
      <label htmlFor="textarea" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="textarea"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ myFunction }
        />
      </label>
    );
  }
}

TextAreaForm.propTypes = {
  storyline: PropTypes.string.isRequired,
  myFunction: PropTypes.func.isRequired,
};

export default TextAreaForm;
