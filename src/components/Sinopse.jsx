import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sinopse extends Component {
  render() {
    const { value4, onChange } = this.props;

    return (
      <textarea>
        <label htmlFor="movie-storyline" data-testid="storyline-input-label">
          Sinopse
          <input
            name="storyline"
            value={ value4 }
            onChange={ onChange }
            data-testid="storyline-input"
            id="movie-storyline"
          />
        </label>
      </textarea>
    );
  }
}

Sinopse.propTypes = {
  value4: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Sinopse;
