import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sinopse extends Component {
  render() {
    const { value4, onChange } = this.props;

    return (
      <label htmlFor="movie-storyline" data-testid="storyline-input-label">
        <p>Sinopse</p>
        <textarea
          name="storyline"
          type="text"
          value={ value4 }
          onChange={ onChange }
          data-testid="storyline-input"
          id="storyline"
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  value4: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Sinopse;
