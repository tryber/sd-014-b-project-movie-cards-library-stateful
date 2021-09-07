import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputText extends Component {
  render() {
    const { titleName, id, name, initValue, change } = this.props;
    return (
      <label htmlFor={ `film-${id}-form` } data-testid={ `${id}-input-label` }>
        { `${titleName}` }
        <input
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
  name: PropTypes.string.isRequired,
  initValue: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default InputText;
