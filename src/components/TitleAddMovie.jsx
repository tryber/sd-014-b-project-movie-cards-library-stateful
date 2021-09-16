import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleAddMovie extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="123" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          onChange={ handleChange }
          value={ value }
          name="title"
          id="title-input"
        />
      </label>
    );
  }
}
TitleAddMovie.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default TitleAddMovie;
