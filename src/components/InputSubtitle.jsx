import React from 'react';
import PropTypes from 'prop-types';

class InputSubTitle extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="text" data-testid="subtitle-input-label">
        Título
        <input
          type="text"
          data-testid="subtitle-input"
          onChange={ handleChange }
          value={ value }
          nome="subtitle"
          id="subtitle"
        />
      </label>
    );
  }
}

InputSubTitle.propTypes = PropTypes.shape({
  value: PropTypes.string,
  handleChance: PropTypes.func,
}).isRequired;

export default InputSubTitle;
