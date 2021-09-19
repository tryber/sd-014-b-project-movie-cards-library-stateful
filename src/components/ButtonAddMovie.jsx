import React from 'react';
import PropTypes from 'prop-types';

class ButtonAddMovie extends React.Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button type="submit" data-testid="send-button" onClick={ handleClick }>
        Adicionar filme
      </button>
    );
  }
}

ButtonAddMovie.propTypes = PropTypes.oneOf({ onClick: PropTypes.func }).isRequired;

export default ButtonAddMovie;
