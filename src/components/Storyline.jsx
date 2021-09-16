import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <input
          name="storyline"
          id="storyline"
          data-testid="storyline-input"
          type="text"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Image.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Image;
