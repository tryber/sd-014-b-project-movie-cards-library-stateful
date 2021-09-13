import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Subtitle extends Component {
  render() {
    const { subtitleValue, handleChange } = this.props;
    return (
      <label htmlFor="subtitleText" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          id="subtitleText"
          data-testid="subtitle-input"
          onChange={ handleChange }
          value={ subtitleValue }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  subtitleValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Subtitle;
