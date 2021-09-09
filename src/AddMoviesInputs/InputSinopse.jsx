import React from 'react';
import PropTypes from 'prop-types';

class InputSinopse extends React.Component {
  render() {
    const { storyline } = this.props;
    return (
      <label
        htmlFor="label-sinopse"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          id="label-sinopse"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ storyline }
        />
      </label>
    );
  }
}

InputSinopse.propTypes = {
  storyline: PropTypes.string.isRequired,
};

export default InputSinopse;
