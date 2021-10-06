import React from 'react';
import PropTypes from 'prop-types';

class InputTypeTextArea extends React.Component {
  render() {
    const { storyline, handleInputChange } = this.props;

    return (
      <div>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            cols="40"
            rows="5"
            value={ storyline }
            onChange={ handleInputChange }
          />
        </label>
      </div>
    );
  }
}

InputTypeTextArea.propTypes = {
  storyline: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
};

InputTypeTextArea.defaultProps = {
  storyline: '',
};

export default InputTypeTextArea;
