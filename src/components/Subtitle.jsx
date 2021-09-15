import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          value={ value }
          type="text"
          data-testid="subtitle-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Subtitle;
