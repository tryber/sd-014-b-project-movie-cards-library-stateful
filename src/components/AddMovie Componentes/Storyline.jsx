import React from 'react';
import PropType from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="MovieStoryline" data-testid="storyline-input-label">
        Sinopse
        <input
          type="text"
          name="storyline"
          value={ value }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Storyline.PropType = {
  value: PropType.string.isRequired,
  handleChange: PropType.func.isRequired,
};

export default Storyline;
