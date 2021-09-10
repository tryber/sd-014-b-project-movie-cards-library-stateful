import React from 'react';
import PropTypes from 'prop-types';

class ButtonMovie extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ onClick }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonMovie.propTypes = {
  onClick: PropTypes.string.isRequired,
};

export default ButtonMovie;
