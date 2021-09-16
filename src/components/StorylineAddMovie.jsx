import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StorylineAddMovie extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="21" data-testid="storyline-input-label">
        Sinopse
        <input
          type="textarea"
          data-testid="storyline-input"
          onChange={ handleChange }
          value={ value }
          name="storyline"
          id="storyline-input"
        />
      </label>
    );
  }
}
StorylineAddMovie.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default StorylineAddMovie;
