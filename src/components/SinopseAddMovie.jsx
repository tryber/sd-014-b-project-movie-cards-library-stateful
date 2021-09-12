import React from 'react';
import PropTypes from 'prop-types';

class SinopseAddMovie extends React.Component {
  render() {
    const { value, addMovie } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          data-testid="storyline-input"
          onChange={ addMovie }
          name="storyline"
          value={ value }
          id="storyline-input"
        />
      </label>
    );
  }
}

SinopseAddMovie.propTypes = {
  value: PropTypes.string,
  addMovie: PropTypes.func,
}.isRequired;

export default SinopseAddMovie;
