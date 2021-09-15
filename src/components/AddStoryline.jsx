import React from 'react';
import PropTypes from 'prop-types';

class AddStoryline extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="Sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={ value }
          cols="30"
          rows="10"
          data-testid="storyline-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddStoryline.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddStoryline;
