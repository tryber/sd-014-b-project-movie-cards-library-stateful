import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <div className="subtitle">
        <label
          htmlFor="subtitle"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            name="subtitle"
            data-testid="subtitle-input"
            type="text"
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Subtitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Subtitle;
