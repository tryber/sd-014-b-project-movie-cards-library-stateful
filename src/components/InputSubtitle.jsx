import React from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends React.Component {

  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          value={ subtitle }
          handleChange={ handleChange }
          data-testid="subtitle-input"
          type="text"
        />
      </label>

    );
  }
}

InputSubtitle.propTypes = {
  rating: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default InputSubtitle;
