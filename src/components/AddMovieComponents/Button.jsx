import React from 'react';
import PropTypes from 'prop-types';

class AddMovieButton extends React.Component {
  render() { // A propriedade onClick do botão invoca uma função definida por você, em <AddMovie />
    const { onClick } = this.props;
    return (
      <button
        type="submit"
        onClick={ onClick }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }
}

AddMovieButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovieButton;
