import React from 'react';
import PropTypes from 'prop-types';

class StoryLineComponent extends React.Component {
  render() {
    const { callback, value } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyLine"
          type="text"
          value={ value }
          data-testid="storyline-input"
          onChange={ callback }
        />
      </label>
    );
  }
}

StoryLineComponent.propTypes = {
  callback: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default StoryLineComponent;
