import React from 'react';
import PropTypes from 'prop-types';

class ButtonAddMovie extends React.Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button type="button" data-testid="send-button" onClick={ handleClick }>
        Adicionar filme
      </button>
    );
  }
}

ButtonAddMovie.propTypes = { handleClick: PropTypes.func.isRequired };

export default ButtonAddMovie;
