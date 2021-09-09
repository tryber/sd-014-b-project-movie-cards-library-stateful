import React from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends React.Component {
  render() {
    const { subtitle } = this.props;
    return (
      <label
        htmlFor="subtitle-input"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          id="subtitle-input"
          data-testid="subtitle-input"
          type="text"
          value={ subtitle }
          onChange={ subtitle }
        />
      </label>
    );
  }
}

InputSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default InputSubtitle;
