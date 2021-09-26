import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubtitleAddMovie extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="12" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          onChange={ handleChange }
          value={ value }
          name="subtitle"
          id="subtitle-input"
        />
      </label>
    );
  }
}
SubtitleAddMovie.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default SubtitleAddMovie;
