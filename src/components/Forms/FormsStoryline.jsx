import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormsStoryline extends Component {
  render() {
    const { storyline, onChange } = this.props;

    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          type="text"
          value={ storyline }
          onChange={ onChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

FormsStoryline.propTypes = {
  storyline: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default FormsStoryline;
