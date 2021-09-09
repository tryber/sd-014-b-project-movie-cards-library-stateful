import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonAddMovie extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <section>
        <button
          data-testid="send-button"
          type="button"
          onClick={ onChange }
        >
          Adicionar filme
        </button>
      </section>
    );
  }
}

ButtonAddMovie.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ButtonAddMovie;
