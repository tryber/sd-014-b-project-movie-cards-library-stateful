import React from 'react';
import PropTypes from 'prop-types';

class StoryLine extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <section className="col">
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            className="form-control"
            data-testid="storyline-input"
            id="storyline-input"
            name="storyline"
            value={ value }
            onChange={ handleChange }
            cols="20"
            rows="5"
          />
        </label>
      </section>
    );
  }
}

StoryLine.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default StoryLine;
