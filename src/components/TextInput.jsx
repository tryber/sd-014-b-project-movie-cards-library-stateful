import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  render() {
    const { label, type, name, value, onChange, dataTestid } = this.props;

    return (
      <section className="field">
        <label
          className="label"
          htmlFor={ name }
          data-testid={ `${dataTestid}-label` }
        >
          { label }
          <input
            className="input is-rounded"
            type={ type }
            name={ name }
            id={ dataTestid }
            value={ value }
            onChange={ onChange }
            data-testid={ dataTestid }
          />
        </label>
      </section>
    );
  }
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default TextInput;
