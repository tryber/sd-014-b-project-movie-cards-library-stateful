import React from 'react';
import PropTypes from 'prop-types';

class SendButton extends React.Component {
  render() {
    const { action } = this.props;
    return (
      <div className="container">
        <button
          className="btn btn-dark m-2"
          type="button"
          data-testid="send-button"
          onClick={ action }
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

SendButton.propTypes = {
  action: PropTypes.func.isRequired,
};

export default SendButton;
