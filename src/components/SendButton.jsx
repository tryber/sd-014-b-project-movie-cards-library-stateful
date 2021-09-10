import React from 'react';
import PropTypes from 'prop-types';

class SendButton extends React.Component {
  render() {
    const { action } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ action }
      >
        Adicionar filme
      </button>
    );
  }
}

SendButton.propTypes = {
  action: PropTypes.func.isRequired,
};

export default SendButton;
