import PropTypes from 'prop-types';
import React from 'react';

class Storyline extends React.Component {
  render() {
    const { storyline, inputChange } = this.props;
    return (
      <label htmlFor="sinopseText" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="sinopseText"
          value={ storyline }
          data-testid="storyline-input"
          cols="30"
          rows="10"
          onChange={ inputChange }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  Storyline: PropTypes.string,
  inputChange: PropTypes.func,
}.isRequired;

export default Storyline;
