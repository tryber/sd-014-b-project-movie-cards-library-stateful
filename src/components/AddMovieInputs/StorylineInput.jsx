import React from 'react';
import PropTypes from 'prop-types';

class StorylineInput extends React.Component {
  render() {
    const { storyline } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse:
        <textarea
          id="storyline-input"
          cols="30"
          rows="10"
          value={ storyline }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

StorylineInput.propTypes = {
  storyline: PropTypes.string.isRequired,
};

export default StorylineInput;
