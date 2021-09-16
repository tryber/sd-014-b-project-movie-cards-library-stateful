import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          type="text"
          value={ value }
          data-testid="title-input"
          onChange={ handleChange }
          name="title"
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default InputTitle;
