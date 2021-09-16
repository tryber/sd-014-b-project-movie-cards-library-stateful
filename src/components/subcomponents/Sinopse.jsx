import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sinopse extends Component {
  render() {
    const { storyline, onChange } = this.props;
    return (
      <div>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            value={ storyline }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Sinopse.propTypes = {
  onChange: PropTypes.func.isRequired,
  storyline: PropTypes.string.isRequired,
};

export default Sinopse;
