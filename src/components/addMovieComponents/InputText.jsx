import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputText extends Component {
  render() {
    const { titleName, id, textHold, name, initValue, change } = this.props;
    return (
      <label htmlFor={ `film-${id}-form` } data-testid={ `${id}-input-label` }>
        { `${titleName}` }
        <input
          type="text"
          className="input-text-forms"
          placeholder={ textHold }
          name={ name }
          value={ initValue }
          id={ `film-${id}-form` }
          onChange={ change }
          data-testid={ `${id}-input` }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  titleName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  textHold: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  initValue: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default InputText;
