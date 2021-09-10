import React from 'react';
import PropTypes from 'prop-types';

class AddTextArea extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddTextArea.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddTextArea;
