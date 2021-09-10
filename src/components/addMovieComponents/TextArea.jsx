import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextAreaForm extends Component {
  render() {
    const { initValue, change } = this.props;
    return (
      <label
        className="text-area-label"
        htmlFor="film-textarea-form"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          id="film-textarea-form"
          name="storyline"
          value={ initValue }
          placeholder="Digite até 150 caracteres."
          maxLength={ 150 }
          onChange={ change }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

TextAreaForm.propTypes = {
  initValue: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default TextAreaForm;
