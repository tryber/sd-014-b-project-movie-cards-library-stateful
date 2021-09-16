import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Subtitle extends Component {
  render() {
    const { subtitle, onChange } = this.props;
    return (
      <div>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Subtitle.propTypes = {
  onChange: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Subtitle;
