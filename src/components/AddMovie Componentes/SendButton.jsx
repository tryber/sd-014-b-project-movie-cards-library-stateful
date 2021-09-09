import React from 'react';
import PropType from 'prop-types';

class SendButton extends React.Component {
  render() {
    const { onClick, handleChange } = this.props;
    return (
      <button
        name="sendButton"
        type="submit"
        data-testid="send-button"
        onClick={ handleChange }
      >
        Adicionar filme
      </button>
    );
  }
}

export default SendButton;
