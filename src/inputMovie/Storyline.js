import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Storyline extends Component {
  render() {
    const { storyline, onChange } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          value={ storyline }
          name="storyline"
          cols="30"
          rows="10"
          data-testid="storyline-input"
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
