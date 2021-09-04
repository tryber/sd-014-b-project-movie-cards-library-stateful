import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SendButton extends Component {
  render() {
    const { sendAndReset } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ sendAndReset }
      >
        Adicionar filme
      </button>
    );
  }
}

SendButton.propTypes = {
  sendAndReset: PropTypes.func.isRequired,
};

export default SendButton;
