import React from 'react';
import PropTypes from 'prop-types';

class AddStoryline extends React.Component {
  render() {
    const { storyline } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <input
          id="storyline-input"
          data-testid="storyline-input"
          type="text"
          value={ storyline }
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

AddStoryline.propTypes = {
  storyline: PropTypes.string.isRequired,
};

export default AddStoryline;
