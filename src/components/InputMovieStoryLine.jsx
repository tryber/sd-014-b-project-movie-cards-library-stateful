import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputMovieStoryLine extends Component {
  render() {
    const { value, funcaoAtualizaPai } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          value={ value }
          onChange={ funcaoAtualizaPai }
          name="storyline"
          id="storyline"
          cols="30"
          rows="10"
          data-testid="storyline-input"
        />
      </label>
    );
  }
}
InputMovieStoryLine.propTypes = {
  value: PropTypes.string.isRequired,
  funcaoAtualizaPai: PropTypes.func.isRequired,
};
export default InputMovieStoryLine;
