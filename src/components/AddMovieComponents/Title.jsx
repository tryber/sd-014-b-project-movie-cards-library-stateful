import React from 'react';
import PropTypes from 'prop-types';

class AddMovieTitle extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="add-title" data-testid="title-input-label">
        Título
        <input
          name="add-title"
          type="text"
          id="text"
          data-testid="title-input"
          value={ value }
          onChange={ handleChange } // The onchange event occurs when the value of an element has been changed.
        />
      </label>
    );
  }
}

AddMovieTitle.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default AddMovieTitle;
