import React from 'react';
import PropTypes from 'prop-types';

class TextForm extends React.Component {
  handleIdString = (id) => {
    if (id === 'imagePath') return 'image';
    return id;
  }

  render() {
    const { id, value, onChange, children } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${this.handleIdString(id)}-input-label` }>
        { children }
        <input
          type="text"
          id={ id }
          onChange={ onChange }
          value={ value }
          data-testid={ `${this.handleIdString(id)}-input` }
        />
      </label>
    );
  }
}

TextForm.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.string,
}.isRequired;

export default TextForm;
