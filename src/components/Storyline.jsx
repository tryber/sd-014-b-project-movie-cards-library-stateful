import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Storyline extends Component {
  render() {
    const { storylineValue, handleChange } = this.props;
    return (
      <label htmlFor="textArea" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="textArea"
          data-testid="storyline-input"
          onChange={ handleChange }
          value={ storylineValue }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  storylineValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Storyline;
