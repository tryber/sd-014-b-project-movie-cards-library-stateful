import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormsSubtitle extends Component {
  render() {
    const { subtitle, onChange } = this.props;

    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          value={ subtitle }
          onChange={ onChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

FormsSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default FormsSubtitle;
