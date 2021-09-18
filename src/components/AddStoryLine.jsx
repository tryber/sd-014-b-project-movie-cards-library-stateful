import React from 'react';
import PropTypes from 'prop-types';

class AddStoryLine extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          type="text"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddStoryLine.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddStoryLine;
