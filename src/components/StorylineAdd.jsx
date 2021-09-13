import React from 'react';
import PropTypes from 'prop-types';

class StorylineAdd extends React.Component {
  render() {
    const { value, addMovie } = this.props;
    return (
      <input
        id="image-input"
        type="text"
        data-testid="image-input"
        name="imagePath"
        onChange={ addMovie }
        value={ value }
      />
    );
  }
}

StorylineAdd.propTypes = {
  value: PropTypes.string.isRequired,
  addMovie: PropTypes.func.isRequired,
};

export default StorylineAdd;
