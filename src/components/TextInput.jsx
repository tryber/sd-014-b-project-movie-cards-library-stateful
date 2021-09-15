import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  render() {
    const { handleChange, type, value, labelText } = this.props;
    // const { title, subtitle, imagePath } = this.state;
    return (
      <label htmlFor={ `${type}-input` } data-testid={ `${type}-input-label` }>
        { labelText }
        <input
          type="text"
          name={ type === 'image' ? 'imagePath' : type }
          id={ `${type}-input` }
          value={ value }
          data-testid={ `${type}-input` }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
};

export default TextInput;
