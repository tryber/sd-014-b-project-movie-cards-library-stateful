import React from 'react';
import PropTypes from 'prop-types';

class InputStory extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div className="storyline">
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

InputStory.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputStory;
