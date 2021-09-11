import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StorylineInput extends Component {
  render() {
    const { storyline, onChange } = this.props;

    return (
      <section className="field">
        <label
          className="label"
          htmlFor="storyline"
          data-testid="storyline-input-label"
        >
          Sinopse
          <textarea
            className="textarea"
            type="text"
            name="storyline"
            id="storyline-input"
            value={ storyline }
            onChange={ onChange }
            data-testid="storyline-input"
          />
        </label>
      </section>
    );
  }
}

StorylineInput.propTypes = {
  storyline: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StorylineInput;
