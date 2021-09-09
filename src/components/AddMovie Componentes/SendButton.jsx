import React from 'react';
import PropTypes from 'prop-types';

class SendButton extends React.Component {
  render() {
    const { handleChange } = this.props;
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

SendButton.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default SendButton;
