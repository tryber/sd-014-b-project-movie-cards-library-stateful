import React from 'react';
import PropTypes from 'prop-types';

class TitleAddMovie extends React.Component {
  render() {
    const { value, addMovie } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          type="text"
          data-testid="title-input"
          onChange={ addMovie }
          name="title"
          value={ value }
          id="title-input"
        />
      </label>
    );
  }
}

TitleAddMovie.propTypes = {
  value: PropTypes.string,
  addMovie: PropTypes.func,
}.isRequired;

export default TitleAddMovie;
