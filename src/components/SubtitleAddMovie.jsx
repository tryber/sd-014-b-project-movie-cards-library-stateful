import React from 'react';
import PropTypes from 'prop-types';

class SubtitleAddMovie extends React.Component {
  render() {
    const { value, addMovie } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          onChange={ addMovie }
          name="subtitle"
          value={ value }
          id="subtitle-input"
        />
      </label>
    );
  }
}

SubtitleAddMovie.propTypes = {
  value: PropTypes.string,
  addMovie: PropTypes.func,
}.isRequired;

export default SubtitleAddMovie;
