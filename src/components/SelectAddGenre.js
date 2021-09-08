import React from 'react';
import PropTypes from 'prop-types';

class SelectAddGenre extends React.Component {
  render() {
    const { name, description, value, handleChange } = this.props;
    return (
      <label
        data-testid={ `${name}-input-label` }
        className="form-label"
        htmlFor={ `add-${name}` }
      >
        {description}
        <input
          data-testid={ `${name}-input` }
          className="form-input"
          id={ `add-${name}` }
          type="text"
          name={ name }
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

SelectAddGenre.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SelectAddGenre;
