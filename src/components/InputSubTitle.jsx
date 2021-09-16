import React from 'react';
import PropTypes from 'prop-types';

class InputSubTitle extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          value={ value }
          data-testid="subtitle-input"
          onChange={ handleChange }
          name="subtitle"
        />
      </label>
    );
  }
}

InputSubTitle.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
export default InputSubTitle;
