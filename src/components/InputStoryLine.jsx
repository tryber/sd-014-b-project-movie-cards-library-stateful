import React from 'react';
import PropTypes from 'prop-types';

class InputStoryLine extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <section>
        <article>
          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea
              data-testid="storyline-input"
              name="storyline"
              value={ storyline }
              onChange={ handleChange }
              type="text"
            />
          </label>
        </article>
      </section>
    );
  }
}

InputStoryLine.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputStoryLine;
