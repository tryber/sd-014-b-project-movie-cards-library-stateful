import React from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends React.Component {
  render() {
    const { value, event } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ value }
          data-testid="subtitle-input"
          onChange={ event }
        />
      </label>
    );
  }
}

InputSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};

export default InputSubtitle;
