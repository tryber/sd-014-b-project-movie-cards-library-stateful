import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="MovieSubtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          value={ value }
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Subtitle;
