// PASSO 6.1
import React from 'react';
import PropTypes from 'prop-types';

export default class StoryLine extends React.Component {
  render() {
    const { handleInitialValue, storyline } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          onChange={ handleInitialValue }
          value={ storyline }
          id="storyline-input"
          name="storyline"
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

StoryLine.propTypes = {
  handleInitialValue: PropTypes.func.isRequired,
  storyline: PropTypes.string.isRequired,
};
