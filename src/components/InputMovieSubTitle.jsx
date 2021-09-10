import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputMovieSubTitle extends Component {
  render() {
    const { value, funcaoAtualizaPai } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          data-testid="subtitle-input"
          type="text"
          value={ value }
          id="subtitle"
          onChange={ funcaoAtualizaPai }
        />
      </label>
    );
  }
}

InputMovieSubTitle.propTypes = {
  value: PropTypes.string.isRequired,
  funcaoAtualizaPai: PropTypes.func.isRequired,
};
export default InputMovieSubTitle;
