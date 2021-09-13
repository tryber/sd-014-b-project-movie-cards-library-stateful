import React from 'react';
import PropTypes from 'prop-types';

class ButtonSendMovie extends React.Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ handleClick }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonSendMovie.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonSendMovie;
