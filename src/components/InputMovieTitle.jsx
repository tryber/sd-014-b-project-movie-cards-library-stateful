import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputMovieTitle extends Component {
  render() {
    const { value, funcaoAtualizaPai } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          name="title"
          data-testid="title-input"
          type="text"
          value={ value }
          id="title"
          onChange={ funcaoAtualizaPai }
        />
      </label>
    );
  }
}

InputMovieTitle.propTypes = {
  value: PropTypes.string.isRequired,
  funcaoAtualizaPai: PropTypes.func.isRequired,
};
export default InputMovieTitle;
