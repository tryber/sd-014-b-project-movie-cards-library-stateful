import React from 'react';
import PropTypes from 'prop-types';

class StorylineInput extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="storyline-input"
          value={ value }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

StorylineInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.func.isRequired,
};

export default StorylineInput;
