import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Storyline extends Component {
  render() {
    const { storyline, onChange } = this.props;
    return (
      <label htmlFor="storyline-input-label" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          value={ storyline }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  storyline: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
