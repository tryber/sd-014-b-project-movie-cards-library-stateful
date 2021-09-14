import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonMovie extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ onChange }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonMovie.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ButtonMovie;
