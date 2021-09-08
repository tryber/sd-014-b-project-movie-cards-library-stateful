import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="title-storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequered;

export default Storyline;
