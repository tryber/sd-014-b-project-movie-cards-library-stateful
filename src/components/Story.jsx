import React from 'react';
import PropTypes from 'prop-types';

class Story extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          value={ value }
          data-testid="storyline-input"
          onChange={ onChange }
          cols="40"
          rows="20"
        />
      </label>
    );
  }
}

Story.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Story;
