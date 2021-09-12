import React from 'react';
import PropTypes from 'prop-types';

class SinopseMovie extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div className="mb-3">
        <label
          className="form-label"
          data-testid="storyline-input-label"
          htmlFor="image-input"
        >
          Sinopse
        </label>
        <textarea
          className="form-control"
          name="storyline"
          value={ value }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </div>

    );
  }
}

SinopseMovie.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default SinopseMovie;
