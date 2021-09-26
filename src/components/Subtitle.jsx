import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { subtitle, onChange } = this.props;
    return (
      <div>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            onChange={ onChange }
            name="subtitle"
            data-testid="subtitle-input"
          />
        </label>
      </div>
    );
  }
}

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Subtitle;
