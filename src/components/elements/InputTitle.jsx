import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { handleChange, state } = this.props;

    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          value={ state }
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  handleChange: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
};

export default InputTitle;
