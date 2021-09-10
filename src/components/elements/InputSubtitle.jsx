import React from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends React.Component {
  render() {
    const { handleChange, state } = this.props;

    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          value={ state }
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputSubtitle.propTypes = {
  handleChange: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
};

export default InputSubtitle;
