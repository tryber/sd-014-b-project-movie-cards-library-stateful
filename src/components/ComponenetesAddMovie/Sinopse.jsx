import React from 'react';
import PropTypes from 'prop-types';

class Sinopse extends React.Component {
  render() {
    const { storyLine, func } = this.props;

    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyLine"
          value={ storyLine }
          onChange={ func }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  storyLine: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default Sinopse;
