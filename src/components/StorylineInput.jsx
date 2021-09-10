import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class StorylineInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea // ajuda do Rodolfo Braga, via slack
            name="storyline"
            value={ value }
            onChange={ onChange }
            data-testid="storyline-input"
          />
        </label>
      </div>
    );
  }
}

StorylineInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
