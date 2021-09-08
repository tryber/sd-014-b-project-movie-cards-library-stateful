import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { value, callback } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <input
          name="storyline"
          type="text"
          data-testid="storyline-input"
          value={ value }
          onChange={ callback }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  value: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Storyline;
