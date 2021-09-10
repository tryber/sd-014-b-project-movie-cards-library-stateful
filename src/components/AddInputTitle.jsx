import React from 'react';
import PropTypes from 'prop-types';

class AddInputTitle extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          type="text"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddInputTitle.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddInputTitle;
