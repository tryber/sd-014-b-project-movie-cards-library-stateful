import React from 'react';
import PropTypes from 'prop-types';

class InputSubTitle extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label htmlFor="text" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          onChange={ handleChange }
          value={ subtitle }
          nome="subtitle"
          id="subtitle"
          cols="30"
          rows="10"
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
