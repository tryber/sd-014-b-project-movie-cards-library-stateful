import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sinopse extends Component {
  render() {
    const { value, handleMovie } = this.props;

    return (
      <label htmlFor="control4" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline"
          name="storyline"
          type="text"
          data-testid="storyline-input"
          onChange={ handleMovie }
          value={ value }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  value: PropTypes.string.isRequired,
  handleMovie: PropTypes.func.isRequired,
};

export default Sinopse;
