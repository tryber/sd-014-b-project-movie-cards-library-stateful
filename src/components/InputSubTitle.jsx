import React from 'react';
import PropTypes from 'prop-types';

class InputSubTitle extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo:
        <input
          name="subtitle"
          data-testid="subtitle-input"
          onChange={ handleChange }
          type="text"
          value={ value }
        />
      </label>
    );
  }
}
InputSubTitle.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputSubTitle;
