import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { sendAndReset } = this.props;
    return (
      <div>
        <button
          onClick={ sendAndReset }
          data-testid="send-button"
          type="button"
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  sendAndReset: PropTypes.func.isRequired,
};
